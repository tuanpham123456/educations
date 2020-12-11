<?php

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

Route::group(['prefix' => 'admin'], function () {
    Route::get('/','AdminDashboardController@index')->name('get_admin.dashboard');

    Route::group(['prefix' => 'tag'],function (){
        Route::get('/','AdminTagController@index')->name('get_admin.tag.index');
        Route::get('create','AdminTagController@create')->name('get_admin.tag.create');
        Route::post('create','AdminTagController@store');

        Route::get('update/{id}','AdminTagController@edit')->name('get_admin.tag.edit');
        Route::post('update/{id}','AdminTagController@update');

        Route::get('delete/{id}','AdminTagController@delete')->name('get_admin.tag.delete');

    });
    Route::group(['prefix' => 'category'],function (){
        Route::get('/','AdminCategoryController@index')->name('get_admin.category.index');
        Route::get('create','AdminCategoryController@create')->name('get_admin.category.create');
        Route::post('create','AdminCategoryController@store');

        Route::get('update/{id}','AdminCategoryController@edit')->name('get_admin.category.edit');
        Route::post('update/{id}','AdminCategoryController@update');

        Route::get('delete/{id}','AdminCategoryController@delete')->name('get_admin.category.delete');

    });
    Route::group(['prefix' => 'teacher'],function (){
        Route::get('/','AdminTeacherController@index')->name('get_admin.teacher.index');
        Route::get('create','AdminTeacherController@create')->name('get_admin.teacher.create');
        Route::post('create','AdminTeacherController@store');

        Route::get('update/{id}','AdminTeacherController@edit')->name('get_admin.teacher.edit');
        Route::post('update/{id}','AdminTeacherController@update');

        Route::get('delete/{id}','AdminTeacherController@delete')->name('get_admin.teacher.delete');

    });
    Route::group(['prefix' => 'course'],function (){
        Route::get('/','AdminCourseController@index')->name('get_admin.course.index');
        Route::get('create','AdminCourseController@create')->name('get_admin.course.create');
        Route::post('create','AdminCourseController@store');

        Route::get('update/{id}','AdminCourseController@edit')->name('get_admin.course.edit');
        Route::post('update/{id}','AdminCourseController@update');

        Route::get('delete/{id}','AdminCourseController@delete')->name('get_admin.course.delete');

    });
    Route::group(['prefix' => 'slide'],function (){
        Route::get('/','AdminSlideController@index')->name('get_admin.slide.index');
        Route::get('create','AdminSlideController@create')->name('get_admin.slide.create');
        Route::post('create','AdminSlideController@store');

        Route::get('update/{id}','AdminSlideController@edit')->name('get_admin.slide.edit');
        Route::post('update/{id}','AdminSlideController@update');

        Route::get('delete/{id}','AdminSlideController@delete')->name('get_admin.slide.delete');

    });
    Route::prefix('ajax')->namespace('Ajax')->group(function (){
        Route::post('/upload/image','AdminAjaxUploadImageController@processUpload')->name('post_ajax_admin.uploads');
    });
});

