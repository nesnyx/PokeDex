<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\UpdateController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\CreatureController;
use App\Http\Controllers\User\PaymentController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('HomeGuest', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::middleware(['auth','role:user'])->prefix('user')->name('user.dashboard.')->group(function(){
    
    Route::get('/dashboard',[CreatureController::class,'index'])->name('index');
});



Route::middleware(["auth","role:admin"])->prefix('admin')->name('admin.dashboard.')->group(function(){
    Route::get('/dashboard',[AdminController::class,'index'])->name('index');
    Route::get('/dashboard/create',[AdminController::class,"create"])->name('create');
    Route::post('/dashboard/create',[AdminController::class,"store"])->name('create.store');
    Route::resource('creature',UpdateController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get("/profile/payments",[PaymentController::class, 'index'])->name('payment.index');
    Route::post('/profile/payments',[PaymentController::class, 'store'])->name("payment.store");
});

Route::middleware('auth')->group(function(){
    Route::redirect('/','/user/dashboard');
});


require __DIR__.'/auth.php';
