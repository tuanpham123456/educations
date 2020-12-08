<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Education\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function getCourseDetail($id,$request){
        $course = Course::where([
            'id'        => $id,
            'c_status'  => Course::STATUS_DEFAULT,
        ])->first();

        if(!$course) return abort(404);
        $courses    = Course::with('teacher:id,t_name,t_avatar,t_slug,t_job')
            ->where('c_status',Course::STATUS_DEFAULT)
            ->orderByDesc('id')
            ->paginate(12);

        $viewData   = [
            'courses'   => $courses,
            'course'    => $course,
        ];
        return view('pages.course.index',$viewData ?? []);
    }
}
