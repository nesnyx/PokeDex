<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call(RoleTableSeeder::class);

        $admin = User::create([
            'name' => 'admin',
            'email' => 'test@example.com',
            "password"=>"password"
        ]);
        $admin->assignRole('admin');

        $user = User::create([
            'name' => 'Aris Bara',
            'email' => 'arisbara@gmail.com',
            "password"=>"password"
        ]);
        $user->assignRole('user');

        
    }
}
