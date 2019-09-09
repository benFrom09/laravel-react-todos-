<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    //
    public function index() {
       $project = Project::all();

       return response()->json($project);
    }

    public function show(Project $project) {
        return response()->json($project);
    }

    public function store(Request $request) {
        dd($request);
    }
}
