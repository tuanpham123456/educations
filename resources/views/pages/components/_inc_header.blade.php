<div class="header">
    <div class="container flex flex-jc-sb sb flex-a-c">
        <div class="header-left flex flex-jc-sb flex-a-c">
            <div class="logo">
                <a href="/" title="Logo">
                    <img src="{{ asset('images/logo.png') }}" alt="">
                </a>
            </div>
            <div class="form_search">
                <form action="" class="flex">
                    <input type="text" class="form-control" placeholder="Từ khóa tìm kiếm ...">
                    <button><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>

        <div class="header-right flex flex-jc-sb flex-a-c">
            <a href="" class="btn-cdo cdo"><i class="fa fa-unclock-alt">Kích hoạt COD</i></a>
            <div class="cart"><i class="fa fa-cart-arrow-down"></i><span>(0)</span></div>
            //dùng function guest.php trong Helper
            @if(get_data_user('web'))
                <div class="auth-login">
                    <a href="">{{ get_data_user('web','name') }}</a>
                </div>
            @else
                <div class="auth flex flex-a-c">
                    <p class="js-auth-popup">
                        <a href="" class="login">Đăng nhập</a>
                        <a href="" class="facebook"><i class="fa fa-facebook "></i></a>
                        <a href="" class="google"><i class="fa fa-google "></i></a>
                    </p>
                </div>
            @endif
        </div>
    </div>
    <div class="header-button container mt10 flex flex-jc-sb">
        <div class="box-category">
            <a href="">
                <i class="fa fa-bars"></i><span>Danh mục khóa học</span>
            </a>
        </div>
        <div class="box-right">
            <a href=""><i class="fa fa-thumbs-o-up"></i><span>Bán chạy nhất</span></a>
            <a href=""><i class="fa fa-rss"></i><span>Blog</span></a>

        </div>
    </div>
</div>

