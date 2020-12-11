<?php

namespace App\Models\System;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Slide extends Model
{
    use HasFactory;
    protected $table = 'slides';
    protected $guarded = [''];
    const STATUS_DEFAULT = 1;
    const STATUS_HIDE    = 0;

    const HOT    = 1;
    const UN_HOT = 0;
    protected $status =[
        self::STATUS_DEFAULT =>[
            'name'    => 'Active',
            'class'   => 'badge-success'
        ],
        self::STATUS_HIDE =>[
            'name'  => 'Hide',
            'class' => 'badge-dark'
        ]
    ];
    public function getStatus(){
        return Arr::get($this->status, $this->s_status , "[N\A]");
    }
}
