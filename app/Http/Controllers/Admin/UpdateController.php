<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateRequestAdmin;
use App\Models\Creature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;


class UpdateController extends Controller
{
    public function edit(Creature $creature){

        return Inertia::render('Admin/Dashboard/Edit',[
            'creature'=> $creature
        ]);

    }
    public function update(UpdateRequestAdmin $request, Creature $creature)
    {
        $data = $request->validated();
        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put('creatures', $request->file('thumbnail'));
            Storage::disk('public')->delete($creature->thumbnail);
        } else {
            $data['thumbnail'] = $creature->thumbnail;
        }
        $creature->update($data);
        return redirect()->route('admin.dashboard.index')->with([
            'message'=> 'Creature Updated successfully',
            "type"=>"success"
        ]);
    }

    public function destroy(Creature $creature){
        $creature->delete();
        return redirect()->route('admin.dashboard.index')->with([
            'message'=> 'Creature Deleted successfully',
            "type"=>"success"
        ]);
    }
}
