<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        try {
            \DB::table('admins')->insert([
                'name'  => 'TuanPham-0403',
                'email' => 'tuanpham4398@gmail.com',
                'phone' => '0932505372',
                'password' => \Hash::make('04031998'),
            ]);
        }catch (\Exception $exception){
            Log::error('[Seeder]',$exception->getMessage());
        }

        try {
            \DB::table('users')->insert([
                'name'  => 'tuanpham0403',
                'email' => 'tuanpham0403@gmail.com',
                'password' => \Hash::make('04031998'),
            ]);
        }catch (\Exception $exception){
            Log::error('[Seeder User]',$exception->getMessage());
        }
    }
}
