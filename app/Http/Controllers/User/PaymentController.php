<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Point;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index(){
        return Inertia::render('Payments/Payment');
    }

    public function store(Request $request){
        $data = $request->all();
        $checkId = DB::table('points')->where('points.user_id',Auth::id())->first();
        // dd($checkId->user_id);
        if ($checkId) {
            // before and new amount calculation
            $resultAmount = $checkId->points + $data['points'];
            DB::table('points')->where('user_id',Auth::id())->update(['points'=> $resultAmount]);
            
            return redirect()->route('user.dashboard.index');
        }
        $data = $request->all();
        // dd($data);
        Point::create($data);
        return redirect()->route('user.dashboard.index');
    }
}
