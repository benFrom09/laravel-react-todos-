<?php

use Illuminate\Database\Seeder;
use App\Project;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create('fr_FR');
        for($i = 0 ; $i < 10; $i++){
            $project = new Project;
            $project->name = "Project " . $faker->userName;
            $project->description = $faker->text(100);
            $project->completed = false;
            $project->created_at= \Carbon\Carbon::now();
            $project->updated_at = \Carbon\Carbon::now();
            $project->save();

        }
    }
}
