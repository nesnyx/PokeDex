<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Point;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index(){
        $point = Point::where('user_id','=',Auth::id())->where('points','>',0)->first();
        // result null

        // return response()->json([
        //     'data'=> $point,
        //     "user_id"=>Auth::id()
        // ]);
        return Inertia::render('Profile/ProfileUser',[
            'points'=>$point
        ]);
    }
}
