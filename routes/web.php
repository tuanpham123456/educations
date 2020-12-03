<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\CategoryController;
use App\Http\Controllers\Frontend\HubCourseController;

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
// render danh mục sang HubCourseController
Route::get('/khoa-hoc/{slug?}',[HubCourseController::class,'render'])->name('get.course.render');
Route::get('/tat-ca-khoa-hoc',[CategoryController::class,'index'])->name('get.category.all');
