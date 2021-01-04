<?php

Route::group(['prefix' => 'permission','namespace' => 'Acl'],function (){
    Route::get('/','AdminPermissionController@index')->name('get_admin.permission.index');
    Route::get('create','AdminPermissionController@create')->name('get_admin.permission.create');
    Route::post('create','AdminPermissionController@store');

    Route::get('update/{id}','AdminPermissionController@edit')->name('get_admin.permission.edit');
    Route::post('update/{id}','AdminPermissionController@update');

    Route::get('delete/{id}','AdminPermissionController@delete')->name('get_admin.permission.delete');
});
Route::group(['prefix' => 'role','namespace' => 'Acl'],function (){
    Route::get('/','AdminRoleController@index')->name('get_admin.role.index');
    Route::get('create','AdminRoleController@create')->name('get_admin.role.create');
    Route::post('create','AdminRoleController@store');

    Route::get('update/{id}','AdminRoleController@edit')->name('get_admin.role.edit');
    Route::post('update/{id}','AdminRoleController@update');

    Route::get('delete/{id}','AdminRoleController@delete')->name('get_admin.role.delete');
});
