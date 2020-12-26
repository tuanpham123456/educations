<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Category;
use App\Models\Education\Course;
use App\Models\Education\CourseTag;
use App\Models\Education\SeoEducation;
use App\Models\Education\Tag;
use App\Models\Education\Teacher;
use App\Service\Seo\RenderUrlSeoCourseService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Modules\Admin\Http\Requests\AdminCourseRequest;

class AdminCourseController extends AdminController
{
    public function index(){
        $courses     = Course::orderByDesc('id')->paginate(10);
        $viewData    = [
            'courses'   => $courses
        ];
        return view ('admin::pages.course.index',$viewData);
    }

    public function create(){
        // show c_teacher_id và c_category_id trong form course
        $categories     = Category::orderByDesc('c_sort')->get();
        $teachers       = Teacher::orderByDesc('id')->get();
        $tags           = Tag::all();

        $tagOld         = [];
        $viewData       = [
            'categories'    => $categories,
            'teachers'      => $teachers,
            'tags'          => $tags,
            'tagOld'        => $tagOld,
        ];
        return view ('admin::pages.course.create',$viewData);
    }

    public function store(AdminCourseRequest $request){
        $data                   = $request->except(['avatar','_token','save','tags']);
        $data['c_position_1']   = 0;
        $data['created_at']     = Carbon::now();

        // check điều kiện
        if(!$request->c_title_seo) $data['c_title_seo'] = $request->c_name;
        if(!$request->c_description_seo) $data['c_description_seo'] = $request->c_name;
        // nếu c_sale ko giảm thì bằng 0
        if (!$request->c_sale) $data['c_sale'] = 0;
        if (!$request->c_total_time) $data['c_total_time'] = 0;
        if (!$request->c_price) $data['c_price'] = 0;
        // nếu tồn tại c_position_1 thì add bằng 1
        if($request->c_position_1) $data['c_position_1'] = 1;


        $courseId = Course::insertGetId($data);
        if($courseId){
        // thêm thành công show toast
            $this->showMessagesSuccess();
            $this->syncTagCourse($courseId,$request->tags);
            RenderUrlSeoCourseService::init($request->c_slug,SeoEducation::TYPE_COURSE,$courseId);
            return redirect()->route('get_admin.course.index');
        }
        // Xử lý thất bại show toast
        $this->showMessagesError();
        return redirect()->back();
    }

    // nếu lưu thành công
    protected function syncTagCourse($courseId,$tags){
        if (!empty($tags)){

            \DB::table('courses_tags')->where('ct_course_id',$courseId)->delete();
            foreach ($tags as $item){
                CourseTag::insert([
                    'ct_course_id'  => $courseId,
                    'ct_tag_id'     => $item
                ]);
            }
        }
    }
    public function edit($id){
        $course     = Course::findOrFail($id);
        $categories     = Category::orderByDesc('c_sort')->get();
        $teachers       = Teacher::orderByDesc('id')->get();
        $tags           = Tag::all();

        // show tag edit
        $tagOld         = CourseTag::where('ct_course_id',$id)
            ->pluck('ct_tag_id')
            ->toArray() ?? [];

        $viewData   = [
            'course'        => $course,
            'categories'    => $categories,
            'teachers'      => $teachers,
            'tags'          => $tags,
            'tagOld'        => $tagOld,
        ];
        return view ('admin::pages.course.update',$viewData);
    }

    public function update(AdminCourseRequest $request,$id){
        $course                 = Course::findOrFail($id);
        $teachers               = Teacher::find($id);
        $data                   = $request->except(['avatar','_token','save']);
        $data['c_position_1']   = 0;
        $data['updated_at']     = Carbon::now();


        if(!$request->c_title_seo) $data['c_title_seo'] = $request->c_name;
        if(!$request->c_description_seo) $data['c_description_seo'] = $request->c_name;
        // nếu c_sale ko giảm thì bằng 0
        if (!$request->c_sale) $data['c_sale'] = 0;
        if (!$request->c_total_time) $data['c_total_time'] = 0;
        if (!$request->c_price) $data['c_price'] = 0;
        if($request->c_position_1) $data['c_position_1'] = 1;

        RenderUrlSeoCourseService::init($request->c_slug,SeoEducation::TYPE_COURSE,$id);
        $course->update($data);
        $this->syncTagCourse($id,$request->tags);
        $this->showMessagesSuccess("Cập nhật thành công");
        return redirect()->route('get_admin.course.index');
    }

    public function delete(Request $request,$id){
        if($request->ajax()){
            $course = Course::find($id);
            if($course){
                $course->delete();
                RenderUrlSeoCourseService::deleteUrlSeo(SeoEducation::TYPE_COURSE,$id);
            }

            return response()->json([
                'status'      => 200,
                'message'   => 'Xóa dữ liệu thành công'
            ]);
        }
        return redirect()->to('/');
    }
}
