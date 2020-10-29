<div class="app-sidebar__overlay" data-toggle="sidebar"></div>
<aside class="app-sidebar sidebar-scroll">
    <div class="main-sidebar-header active">
        <a class="desktop-logo logo-light active" href="index"><img src="{{ asset('img/brand/logo.png') }}" class="main-logo" alt="logo"></a>
        <a class="desktop-logo logo-dark active" href="index"><img src="{{ asset('img/brand/logo-white.png') }}" class="main-logo dark-theme" alt="logo"></a>
        <a class="logo-icon mobile-logo icon-light active" href="index"><img src="{{ asset('img/brand/favicon.png') }}" class="logo-icon" alt="logo"></a>
        <a class="logo-icon mobile-logo icon-dark active" href="index"><img src="{{ asset('img/brand/favicon-white.png') }}" class="logo-icon dark-theme" alt="logo"></a>
    </div>
    <div class="main-sidemenu">
        <div class="app-sidebar__user clearfix">
            <div class="dropdown user-pro-body">
                <div class="">
                    <img alt="user-img" class="avatar avatar-xl brround" src="{{ asset('img/faces/6.jpg') }}"><span class="avatar-status profile-status bg-green"></span>
                </div>
                <div class="user-info">
                    <h4 class="font-weight-semibold mt-3 mb-0">Petey Cruiser</h4>
                    <span class="mb-0 text-muted">Premium Member</span>
                </div>
            </div>
        </div>
        <ul class="side-menu">
            <li class="slide">
                <a class="side-menu__item" href="index">
                    <span class="side-menu__label"><i class="la la-tachometer-alt"></i> Tổng quan</span>
                </a>
            </li>
            <li class="slide">
                <a class="side-menu__item" data-toggle="slide" href="index.html#">
                    <span class="side-menu__label"><i class="la la-book-open"></i>  Khóa học</span>
                    <i class="las la-chevron-circle-down"></i>                </a>
                <ul class="slide-menu">
                    <li><a class="slide-item" href="cards">Danh mục</a></li>
                    <li><a class="slide-item" href="cards">Từ khóa</a></li>


                </ul>
            </li>
        </ul>
    </div>
</aside>
