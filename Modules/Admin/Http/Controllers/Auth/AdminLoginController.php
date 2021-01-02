<?php

namespace Modules\Admin\Http\Controllers\Auth;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AdminLoginController extends Controller
{
    public function login(){
        return view ('admin::pages.auth.login');
    }

    public function postLogin(Request $request){

    }
}
