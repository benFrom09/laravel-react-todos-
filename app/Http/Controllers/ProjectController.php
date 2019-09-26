<?php

namespace App\Http\Controllers;

use App\Project;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //
    public function index() {
       $project = Project::where(['completed'=>false])->orderBy('created_at','desc')->get();
        //dd($project);
       return response()->json($project);
    }

    public function filter(Request $request){
        $project = new Project;
        if($request->has('completed')){
            $project = $project->where(["completed"=>$request["completed"]]);
        }

        if($request->has('name')){
            $project = $project->orderBy("name",$request["name"]);
        }
        if($request->has('created')){
            $project = $project->orderBy("created_at",$request["created"]);

        }
        if($request->has('date')){
            $project = $project->orderBy("end_date",$request["date"]);
        }
        if($request->has('color')){
            $project = $project->orderBy("color",$request["color"]);
        }
        /*
        $project = $project->appends([
            "completed"=>$request["completed"],
            "name"=>$request["name"],
            "created"=>$request["created"],
            "date"=>$request["date"],
            "color"=>$request["color"]
        ]);
        */
        return response()->json($project->get());
    }

    public function show(Project $project) {
        return response()->json($project);
    }

    public function store(Request $request) {
        $validatedData = $request->validate([
            "name"=>"required|min:4|max:255",
            "description"=>"nullable",
            "completed"=>"boolean"
        ]);

        if($validatedData){
            $project = Project::create([
                "name"=>htmlentities(trim($validatedData["name"])),
                "description"=>htmlentities($validatedData["description"]),
                "color"=>htmlentities($request->color),
                "start_date"=>$request->start_date != null ? $request->start_date : Carbon::now('Europe/Paris')->format('Y-m-d'),
                "end_date"=>$request->end_date != null ? $request->end_date : Carbon::now('Europe/Paris')->addWeeks(2)->format('Y-m-d'),
                "created_at"=>Carbon::now('Europe/Paris')->format('Y-m-d'),
                "updated_at"=>Carbon::now('Europe/Paris')->format('Y-m-d'),
                "completed"=>$validatedData["completed"]
            ]);
            return response()->json([$project,['response'=>true],['last_insert_id'=>$project->id]]);
        }
        return response()->json(['response'=>false]);


    }

    public function update(Project $project,Request $request){
        $project->name = $request->name;
        $project->description = $request->description;
        $project->color = $request->color;
        $project->start_date = $request->start_date;
        $project->end_date = $request->end_date;
        $project->completed = $request->completed;
        $project->updated_at = Carbon::now('Europe/Paris')->format('Y-m-d');

        $response = $project->update();
        if($response){
            return response()->json($project);
        }


    }

    public function changeStatus(Project $project,Request $request){
        $project->completed = $request->completed;
        $project->update();
        return response()->json($project);
    }

    public function updateColor(Project $project,Request $request){

        $project->color = $request->color;
        $project->update();
        return response()->json($project);

    }

    public function delete(Project $project) {
        $project->delete();
        return response()->json($project);
    }
}
