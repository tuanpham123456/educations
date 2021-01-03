<?php

Route::group(['prefix' => 'permission','namespace' => 'Acl'],function (){
    Route::get('/','AdminPermissionController@index')->name('get_admin.permission.index');
    Route::get('create','AdminPermissionController@create')->name('get_admin.permission.create');
    Route::post('create','AdminPermissionController@store');

    Route::get('update/{id}','AdminPermissionController@edit')->name('get_admin.permission.edit');
    Route::post('update/{id}','AdminPermissionController@update');

    Route::get('delete/{id}','AdminPermissionController@delete')->name('get_admin.permission.delete');

});
