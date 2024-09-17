<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('HomeGuest');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {   
        
        if (!$request->authenticate()) {
            response()->json([
                'status'=>'error',
                "message"=>'credentials invalid'
            ],401);
        }
        
        $request->session()->regenerate();

        $user = new User();
        $findUserById = $user->where('id','=',Auth::id())->first();
        $role = $findUserById->hasRole('admin');
        if($role){
            return redirect()->route('admin.dashboard.index');
            if (Auth::check()) {
                return redirect()->route('admin.dashboard.index');
            }
        }
        if (Auth::check()) {
            return redirect()->route('user.dashboard.index');
        }
        return redirect()->intended(route('user.dashboard.index', absolute: false));
        
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();
        
        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
