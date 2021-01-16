<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AdminCourseContentController extends Controller
{
    public function store(Request $request){
        if ($request->ajax()){
            return response()->json([
                'status'    => 200,
                'message'   => 'test'
            ]);
        }
    }
}
