<?php


namespace App\Service\Seo;


use App\Models\Education\SeoEducation;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class RenderUrlSeoCourseService
{
    //tạo thư mục Serviec/Seo/RenderUrlSeoCourseService
    const PREFIX_CATEGORY = '-c';
    const PREFIX_TAG = '-t';
    const PREFIX_COURSE = '-cr';

    const TYPE_CATEGORY = 1;
    const TYPE_TAG = 2;
    const TYPE_COURSE = 3;

    public static function init($slug,$type,$id){
        try {
            $prefix = '';
            $that   = new self();
            switch ($type){
                case self::TYPE_CATEGORY;
                    $prefix = self::PREFIX_CATEGORY;
                    break;
                case self::PREFIX_TAG;
                    $prefix = self::PREFIX_TAG;

                    break;
                case self::PREFIX_COURSE;
                    $prefix = self::PREFIX_COURSE;

                    break;
            }
            $slug  = Str::slug($slug . $prefix);
            $slugMd5  = md5($slug);
            $check = $that->checkUrl($slugMd5);
            if($check){
                SeoEducation::insert([
                    'se_slug' => $slug, //se_slug sẽ bằng slug cuối cùng
                    'se_md5' => $slugMd5, //lưu thêm slugmd5
                    'se_type'=> $type,
                    'se_id'  => $id, //lưu id của (category,tag,course tùy theo type) vào se_id
                    'created_at'  => Carbon::now(),
                ]);
            }
        }catch (\Exception $exception){
            Log::error("[RenderUrlSeoCourseService init:]" .$exception->getMessage());
        }
    }
    //check kiểm tra nếu slug thay đổi id có thể k
    protected function checkUrl($md5Slug){
        $seo    = SeoEducation::where([
            'se_md5'    => $md5Slug,
        ])->first(); //first ko có kq thì lấy cái đầu tiên ko thì null

        if($seo) return false;
        return true;
    }
    // xóa
    public static function deleteUrlSeo($type,$id){
        try {
            $seo    = SeoEducation::where([
                'se_id'     => $id,
                'se_type'   => $type,
            ])->delete();
        }catch (\Exception $exception){
            Log::error("[deleteUrlSeo init:]" .$exception->getMessage());
        }
    }
}
