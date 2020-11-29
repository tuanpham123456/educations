<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\CategoryController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('',[HomeController::class,'index']);

Route::get('/danh-muc/{slug?}',[CategoryController::class,'index'])->name('get.category');
Route::get('/tat-ca-khoa-hoc',[CategoryController::class,'index'])->name('get.category.all');
