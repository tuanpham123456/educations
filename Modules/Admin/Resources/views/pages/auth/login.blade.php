<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=9" />
    <meta name="Description" content="Bootstrap Responsive Admin Web Dashboard HTML5 Template">
    <meta name="Author" content="Spruko Technologies Private Limited">
    <meta name="Keywords" content="admin,admin dashboard,admin dashboard template,admin panel template,admin template,admin theme,bootstrap 4 admin template,bootstrap 4 dashboard,bootstrap admin,bootstrap admin dashboard,bootstrap admin panel,bootstrap admin template,bootstrap admin theme,bootstrap dashboard,bootstrap form template,bootstrap panel,bootstrap ui kit,dashboard bootstrap 4,dashboard design,dashboard html,dashboard template,dashboard ui kit,envato templates,flat ui,html,html and css templates,html dashboard template,html5,jquery html,premium,premium quality,sidebar bootstrap 4,template admin bootstrap 4"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Title -->
    <title> Valex -  Premium dashboard ui bootstrap rwd admin html5 template </title>
    <!-- Favicon -->
    <link rel="icon" href="{{ asset('img/brand/favicon.png') }}" type="image/x-icon"/>
    <meta name="csrf-token" id="csrf_token" content="{{ csrf_token() }}">

    <!-- Icons css -->
    <link href="assets/css/icons.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css_admin/admin_dashboard.css') }}">
    @if(session('toastr'))
        <script>
            var TYPE_MESSAGES = "{{ session('toastr.type') }}"
            var MESSAGE = "{{ session('toastr.message') }}"
        </script>
    @endif
</head>
<body class="main-body bg-primary-transparent">
<!-- Loader -->
<div id="global-loader">
    <img src="{{ asset('img/loader.svg') }}" class="loader-img" alt="Loader">
</div>
<!-- /Loader -->
<div class="container-fluid">
    <div class="row no-gutter">
        <!-- The image half -->
        <div class="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent">
            <div class="row wd-100p mx-auto text-center">
                <div class="col-md-12 col-lg-12 col-xl-12 my-auto mx-auto wd-100p">
                    <img src="{{ asset('images/login.png') }}" class="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo">
                </div>
            </div>
        </div>
        <!-- The content half -->
        <div class="col-md-6 col-lg-6 col-xl-5 bg-white">
            <div class="login d-flex align-items-center py-2">
                <!-- Demo content-->
                <div class="container p-0">
                    <div class="row">
                        <div class="col-md-10 col-lg-10 col-xl-9 mx-auto">
                            <div class="card-sigin">
                                <div class="mb-5 d-flex">
                                    <a href="index"><img src="{{ asset('images/favicon.png') }}" class="sign-favicon ht-40" alt="logo"></a>
                                    <h1 class="main-logo1 ml-1 mr-0 my-auto tx-28">Đăng nhập Admin</h1>
                                </div>
                                <div class="card-sigin">
                                    <div class="main-signup-header">
                                        <h2>Welcome back!</h2>
                                        <h5 class="font-weight-semibold mb-4">Please sign in to continue.</h5>
                                        <form action="" method="post">
                                            @csrf
                                            <div class="form-group">
                                                <label>Email</label> <input class="form-control" placeholder="Enter your email" value="{{ old('email') }}" type="text" name="email">
                                                @if($errors->first('email'))
                                                    <span class="text-danger">{{ $errors->first('email') }}</span>
                                                @endif
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label> <input class="form-control" placeholder="Enter your password" value="{{ old('password') }}" type="password" name="password">
                                                @if($errors->first('password'))
                                                    <span class="text-danger">{{ $errors->first('password') }}</span>
                                                @endif
                                            </div>
                                            <button class="btn btn-main-primary btn-block">Sign In</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End -->
            </div>
        </div>
        <!-- End -->
    </div>
</div>
<script src="{{ asset('js_admin/admin_dashboard.js') }}"></script>

</body>
</html>
