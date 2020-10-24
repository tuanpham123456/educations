@extends('layouts.app_master_frontend')
@section('style')
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
@stop
@section('content')
    @include('pages.home.include._inc_banner')
@stop
@section('js')
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
    <script src="{{ asset('js/home.js') }}"></script>
@stop