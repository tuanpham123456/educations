<div class="banner">
    <div class="container">
        <div class="box">
            <div class="box-categories">
                <div class="categories">
                    <ul>
                        <li>
                            <a href="{{ route('get.category.all') }}" title="Tất cả khóa học">
                                <i class="fa fa-credit-card">
                                    <span>  Tất cả khóa học</span>
                                </i>
                            </a>
                        </li>
                       @foreach($categoriesParent as $item)
                            <li>
                                <a href="{{ route('get.course.render',['slug' => $item->c_slug.'-c']) }}" title="{{ $item->c_name }}"><i class="{{ $item->c_icon }}"><span>  {{ $item->c_name }}</span></i></a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="box-banner">
                <div class="banner_top">
                    <div class="lists js-banner owl-carousel owl-theme">
                    @foreach($slides ?? [] as $item)
                       <a href="{{ $item->s_link }}">
                           <img src="{{ pare_url_file($item->s_banner)}}" alt="{{ $item->s_name }}">
                        </a>
                    @endforeach
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
