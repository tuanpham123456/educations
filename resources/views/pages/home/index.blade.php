@extends('layouts.app_master_frontend')
@section('style')
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
@stop
@section('content')
    @include('pages.home.include._inc_banner')
    @include('pages.home.include._inc_section_one')
    @include('pages.home.include._inc_section_two')
    @include('pages.home.include._inc_tags_hot',[ 'tags' => $tagsHot])
    @include('pages.home.include._inc_lecture')
@stop
@section('js')
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
    <script src="{{ asset('js/home.js') }}"></script>
@stop
