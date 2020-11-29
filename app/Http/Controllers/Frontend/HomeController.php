<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Education\Course;
use App\Models\Education\Tag;
use App\Models\Education\Teacher;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index(){
        //show tag nổi bật
        $tagsHot      = Tag::where('t_hot',Tag::HOT)
            ->orderByDesc('t_sort')
            ->limit(10)
            ->select('t_name','t_hot','id','t_slug')
            ->get();
        // show khóa hoc free
        $coursesFree    = Course::with('teacher:id,t_name,t_avatar,t_slug')
            ->where('c_price',0)
            ->orderByDesc('id')
            ->limit(16)
            ->get();
        // show category cấp 1
        $categoriesParent   = Category::where('c_parent_id',0)
            ->orderByDesc('c_sort')
            ->select('id','c_name','c_icon','c_slug','c_avatar')
            ->get();
        $viewData   = [
            'tagsHot'           => $tagsHot,
            'coursesFree'       => $coursesFree,
            'categoriesParent' => $categoriesParent,
        ];
        return view ('pages.home.index',$viewData);
    }
}
