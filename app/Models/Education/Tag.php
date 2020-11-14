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
    protected $status =[
        self::STATUS_DEFAULT =>[
          'name'    => 'Active',
          'class'   => 'badge-success'
        ],
        self::STATUS_HIDE =>[
            'name'  => 'Hide',
            'class' => 'badge-default'
        ]
    ];

    public function getStatus(){
        return Arr::get($this->status, $this->t_status , "[N\A]");
    }
}
