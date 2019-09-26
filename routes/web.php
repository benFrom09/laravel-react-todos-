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



Route::get('/',function(){
    return view('welcome');
});
Route::get('/projects',function(){
    return view('welcome');
});
Route::get('/project/{id}',function($id){
    return view('welcome');
});
Route::get('/calendar',function(){
    return view('welcome');
});
Route::get('/preferences',function(){
    return view('welcome');
});
Route::get('/public',function(){
    return view('welcome');
});


