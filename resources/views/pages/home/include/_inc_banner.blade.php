<div class="banner">
    <div class="container">
        <div class="box">
            <div class="box-categories">
                <div class="categories">
                    <ul>
                        <li>
                            <a href=""><i class="fa fa-credit-card"><span>  Tất cả khóa học</span></i></a>
                        </li>
                       @foreach($categoriesParent as $item)
                            <li>
                                <a href="" title="{ $item->c_name }}"><i class="{{ $item->c_icon }}"><span>  {{ $item->c_name }}</span></i></a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="box-banner">
                <div class="banner_top">
                    <div class="lists js-banner owl-carousel owl-theme">
                    @for($i = 1; $i <= 5; $i ++)
                       <a>
                           <img src="{{ asset('images/banner.png') }}" alt="">
                        </a>
                    @endfor
                </div>

                </div>
                <div class="banner_bottom">
                    <div class="lists">
                        @for($i = 1 ; $i <=3; $i ++)
                            <div class="item item-3">
                                <a href="">
                                    <img src="{{ asset('images/banner_bottom.jpg') }}" alt="">
                                </a>
                            </div>
                        @endfor
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
