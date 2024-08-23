<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Creature extends Model
{
    use HasFactory;

    protected $table = 'creatures';
    protected $fillable = [
        'name',
        'slug',
        'category',
        'price',
        'thumbnail',
    ];
}
