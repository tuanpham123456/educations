<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Education\Course;
use App\Models\Education\Tag;
use App\Models\Education\Teacher;

use App\Models\System\Slide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index(){
        //show từ khóa nổi bật
        $tagsHot      = Tag::where('t_hot',Tag::HOT)
            ->orderByDesc('t_sort')
            ->limit(10)
            ->select('t_name','t_hot','id','t_slug')
            ->get();
        // khóa học nổi bật ở vị trí thứ nhất
        $courseHotPositionOne =  Course::with('teacher:id,t_name,t_avatar,t_slug,t_job')
            ->where([
                'c_position_1' => 1,
                'c_hot'        => 1
            ])
            ->orderByDesc('id')
            ->limit(8)
            ->get();
        // show category nổi bật ở vị trí 1
        $categoryHotPositionOne =  Category::where([
                'c_position_1' => 1,
                'c_hot'        => 1
            ])
            ->orderByDesc('id')
            ->limit(8)
            ->get();
        // show khóa hoc free
        $coursesFree    = Course::with('teacher:id,t_name,t_avatar,t_slug,t_job')
            ->where('c_price',0)
            ->orderByDesc('id')
            ->limit(16)
            ->get();
        // show category cấp 1
        $categoriesParent   = Category::where('c_parent_id',0)
            ->orderByDesc('c_sort')
            ->select('id','c_name','c_icon','c_slug','c_avatar')
            ->get();
        // lấy slide
        $slides  = Slide::where('s_status',Slide::STATUS_DEFAULT)
            ->orderByDesc('s_sort')
            ->get();
        // show đội ngũ giảng viên
        $teachers   = Teacher::orderByDesc('id')->get();

        // package Meta Seo Laravel
        \SEOMeta::setTitle('Kyan');
        \SEOMeta::setDescription('Kyan');
        \SEOMeta::setCanonical(\Request::url());
        \OpenGraph::setDescription('Website sell course');
        \OpenGraph::setTitle('Kyan');
        \OpenGraph::setUrl(\Request::url());
        \OpenGraph::addProperty('type', 'articles');

        $viewData   = [
            'tagsHot'           => $tagsHot,
            'coursesFree'       => $coursesFree,
            'categoriesParent'  => $categoriesParent,
            'slides'            => $slides,
            'teachers'          => $teachers,
            'courseHotPositionOne' => $courseHotPositionOne,
            'categoryHotPositionOne' => $categoryHotPositionOne,
        ];
        return view ('pages.home.index',$viewData);
    }
}
