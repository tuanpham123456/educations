<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Education\SeoEducation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HubCourseController extends Controller
{
        //render url course not all
    public function render(Request $request,$slug){
        $slugMd5    = md5(Str::slug($slug));
        $urlSeo     = SeoEducation::where([
            'se_md5'    => $slugMd5
        ])->first();
        if ($urlSeo){
            $type   = $urlSeo->se_type;
            switch ($type){
                case SeoEducation::TYPE_CATEGORY:
                    return (new CategoryController())->getCourseByCategory($urlSeo->se_id,$request);
                case SeoEducation::TYPE_COURSE:
                    return (new CourseController())->getCourseDetail($urlSeo->se_id,$request);
                case SeoEducation::TYPE_TAG:
                    return (new TagController())->getCourseByTag($urlSeo->se_id,$request);
            }
        }
        return redirect()->route('get.category.all');
    }
}
