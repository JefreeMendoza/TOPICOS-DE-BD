<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('principal');
});

Route::get('/login', function () {
    return view('auth.login');
});

Route::get('/logout', function () {
    return redirect ('/');
});

Route::get('/catalog', function () {
    return view('catalog.catalog-index');
});

Route::get('/catalog/show/{id}', function ($id) {
    return view('catalog.catalog-show', ['id' => $id]);
});

Route::get('/catalog/create', function ($id) {
    return view('catalog.catalog-create');
});

Route::get('/catalog/edit/{id}', function ($id) {
    return view('catalog.catalog-edit', ['id' => $id]);
});

