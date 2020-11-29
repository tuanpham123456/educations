<?php

namespace App\Models\Education;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Tag extends Model
{
    use HasFactory;
    public $table = 'tags';
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
    protected $hot =[
        self::HOT =>[
            'name'    => 'Hot',
            'class'   => 'badge-success'
        ],
        self::UN_HOT =>[
            'name'  => 'Default',
            'class' => 'badge-dark'
        ]
    ];
    public function getStatus(){
        return Arr::get($this->status, $this->t_status , "[N\A]");
    }
    public function getHot(){
        return Arr::get($this->hot, $this->t_hot , "[N\A]");
    }
}
