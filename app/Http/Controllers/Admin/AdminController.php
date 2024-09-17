<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCreature;
use App\Http\Requests\UpdateRequestAdmin;
use App\Models\Creature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;
class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Creature::all();
        return Inertia::render('Admin/Dashboard/Index',[
            'creatures'=>$data
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */

    public function create(){

    
        return Inertia::render('Admin/Dashboard/Create');        
    }


    public function store(StoreCreature $request)
    {
        
        $data = $request->validated();
       
        $data['thumbnail']= Storage::disk('public')->put('creatures',$request->file('thumbnail'));
        $data['slug']= Str::slug($data['name']);
        Creature::create($data);
        return redirect()->route('admin.dashboard.index')->with([
            'message'=> 'Creature inserted successfully',
            "type"=>"success"
        ]);;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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
