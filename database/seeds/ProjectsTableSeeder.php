<?php

use App\Project;
use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;

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

            $project = new Project;
            $project->name = "Project " . $faker->userName;
            $project->description = $faker->text(100);
            $project->completed = true;
            $project->color = '#B200FF';
            $project->start_date = Carbon::create(2019,8,19,0,0,0,'Europe/Paris')->format('Y-m-d');
            $project->end_date = Carbon::create(2019,8,19,0,0,0,'Europe/Paris')->addWeeks(2)->format('Y-m-d');
            $project->save();
            $project2 = new Project;
            $project2->name = "Project " . $faker->userName;
            $project2->description = $faker->text(100);
            $project2->completed = false;
            $project2->color = '#3F9843';
            $project2->start_date = Carbon::now('Europe/Paris')->format('Y-m-d');
            $project2->end_date = Carbon::now('Europe/Paris')->addWeeks(2)->format('Y-m-d');
            $project2->save();


    }
}
