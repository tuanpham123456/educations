<?php

namespace Modules\Admin\Http\Controllers;

use App\Models\Education\SeoEducation;
use App\Models\System\Slide;
use App\Service\Seo\RenderUrlSeoCourseService;
use Carbon\Carbon;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Admin\Http\Requests\AdminSlideRequest;

class AdminSlideController extends AdminController
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $slides     = Slide::orderByDesc('id')
        ->paginate(20);
        $viewData = [
            'slides' => $slides
        ];
        return view('admin::pages.slide.index',$viewData);
    }
    public function create(){
        return view('admin::pages.slide.create');
    }
    public function store(AdminSlideRequest $request){
        $data                   = $request->except(['avatar','_token','save']);
        $data['created_at']     = Carbon::now();
        $slideId = Slide::insertGetId($data);
        if($slideId){
            //thêm thành công show toast
            $this->showMessagesSuccess();
            return redirect()->route('get_admin.slide.index');
        }
        //Xử lý thất bại show toast
        $this->showMessagesError();
        return redirect()->back();
    }
    public function edit($id){
        $slide       = Slide::findOrFail($id);
        $viewData   =[
            'slide'  => $slide
        ];
        return view ('admin::pages.slide.update',$viewData);
    }
    public function update(AdminSlideRequest $request,$id){
        $slide                  = Slide::findOrFail($id);
        $data                   = $request->except(['avatar','_token','save']);
        $data['updated_at']     = Carbon::now();


        $slide->fill($data)->save();
        $this->showMessagesSuccess("Cập nhật thành công");
        return redirect()->route('get_admin.slide.index');

    }
    public function delete(Request $request,$id){
        if($request->ajax()){
            $slides   = Slide::find($id);
            if($slides){
                $slides->delete();
            }

            return response()->json([
                'status'      => 200,
                'message'   => 'Xóa dữ liệu thành công'
            ]);
        }
        return redirect()->to('/');
    }


}
