<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CreatureController extends Controller
{
    
    public function index()
    {
        
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
