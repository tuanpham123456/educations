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
    });

    Route::group(['prefix' => 'teacher'],function (){
        Route::get('/','AdminTeacherController@index')->name('get_admin.teacher.index');
    });

});

