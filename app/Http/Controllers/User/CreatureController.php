<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Creature;
use App\Models\Point;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

use function Termwind\render;

class CreatureController extends Controller
{
    
    public function index()
    {
        // $point = Point::where('user_id','=',Auth::id())->where('points','>',0)->first();
        $point = DB::table('points')->where('points.user_id',Auth::id())->join('users','users.id','=','points.user_id')->first();
        // dd($point[0]);
        $creature = Creature::all();
        return Inertia::render('Home',[
            'creatures'=>$creature,
            'points'=>$point->points
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $rules =[
        //     'name'=>"required|string",
        //     "category"=>"required|string",
        //     "price"=>"required|integer",
        //     "thumbnail"=>"required|string",
            
        // ];
        // $data = $request->all();
        // $validate = Validator::make($data, $rules);
        // if ($validate->fails()) {
        //     return response()->json([
        //         'status'=>'error',
        //         'message'=>$validate->errors()
        //     ],400);
        // }


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
