<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Carbon;

class DateTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_date_format_without_time()
    {
        $date = Carbon::now('Europe/Paris')->format('d/m/Y');
        $this->assertEquals(date('d/m/Y'),$date,'test formatting date to locale fr');

    }

    public function test_add_3_weeks_to_date() {

        $date = Carbon::create(2019,9,11,0,0,0,'Europe/Paris')->addWeeks(3)->format('d/m/Y');
        $this->assertEquals('02/10/2019',$date);
    }
}
