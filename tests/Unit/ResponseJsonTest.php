<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ResponseJsonTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_It_returns_ProjectsList_to_Json()
    {
        $response = $this->json('GET','/api/projects');
        $response->assertStatus(200)->assertJsonFragment(
            ['name'=>"Project joseph42",]
        );
    }
}
