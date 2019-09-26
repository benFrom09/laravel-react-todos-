<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/**
 * Get the lastest 5 projects
 */
Route::get('/all','ProjectController@index')->name('api.projects');

/**
 * Get all projects ordered by filter
 */
Route::get('/projects','ProjectController@filter');

/**
 * Get a single project
 */
Route::get('/project/{project}','ProjectController@show');

/**
 * Store a project
 */
Route::post('/project/store','ProjectController@store');

/**
 * Update project
 */
Route::put('/project/update/{project}','ProjectController@update');

Route::put('/project/updatecolor/{project}','ProjectController@updateColor');
Route::put('/project/updatestatus/{project}','ProjectController@changeStatus');

/**
 * Delete a project
 */
Route::delete('/project/delete/{project}','ProjectController@delete');


