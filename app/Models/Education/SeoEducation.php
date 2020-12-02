<?php

namespace App\Models\Education;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeoEducation extends Model
{
    use HasFactory;
    protected $table = 'seo_education';
    protected $guarded = [''];
    //type
    const TYPE_CATEGORY = 1;
    const TYPE_TAG = 2;
    const TYPE_COURSE = 3;
}
