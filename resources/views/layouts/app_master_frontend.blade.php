<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
{{--    <title>Khóa học lập trình @yield('title_page')</title>--}}
    {!! SEO::generate() !!}
    {!! SEOMeta::generate() !!}
    {!! OpenGraph::generate() !!}
    @yield('style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
    @include('pages.components._inc_header')
    @yield('content')
    @include('pages.components._inc_footer')
    @include('pages.components.auth._inc_popup_auth')
</body>
    @yield('js')
</html>
