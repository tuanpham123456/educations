<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Education\Course;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCourseByCategory($id, $request ){
        $category   = Category::find($id);
        if(!$category) return abort(404);
        // show parent_id ra
        $categoryChild = Category::where('c_parent_id',$id)->get();

        $courses    = Course::with('teacher:id,t_name,t_avatar,t_slug,t_job')
            ->where('c_category_id',$id)
            ->where('c_status',Course::STATUS_DEFAULT)
            ->orderByDesc('id')
            ->paginate(12);
        $viewData  = [
            'courses'   => $courses,
            'category'  => $category,
            'categoryChild' => $categoryChild
        ];
        return view ('pages.category.index',$viewData ?? []);
    }
    public function index(Request $request){
        $courses    = Course::with('teacher:id,t_name,t_avatar,t_slug,t_job')
            ->where('c_status',Course::STATUS_DEFAULT)
            ->orderByDesc('id')
            ->paginate(12);
        $viewData  = [
            'courses'   => $courses
        ];
        return view ('pages.category.index',$viewData ?? []);
    }
}
