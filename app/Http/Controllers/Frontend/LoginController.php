<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index(Request $request){
        $credentials = $request->only('email', 'password');

        if (\Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('get.home');
        }
        return 'Failse';

    }
}
