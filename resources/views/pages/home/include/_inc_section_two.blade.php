<section class="section_two">
    <div class="container">
        <div class="section_title heading-before">
            <h2 class="heading-h2 heading-before">Khóa học <span style="color: #ff7818">0 đồng</span></h2>
        </div>
        <div class="lists  js-lists-course-home owl-carousel owl-theme ">
            @foreach($courses as $item)
                <div class="item list-course  mr20 box-course mb20">
                    <div class="avatar">
                        <div class="img">
                            <a href="">
                                <img src="{{ asset('images/section_1.jpg') }}" alt="">
                            </a>
                            <div class="img_badget">
                                <p class="flex flex-jc-sb pl10 pr10">
                                <span>
                                    <i class="fa fa-play-circle"> 25</i>
                                </span>
                                    <span>
                                    <i class="fa fa-star"> 4.8</i>
                                </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        <h3 class="title"><a href="">{{ $item->c_name }}</a></h3>
                        <p class="info-auth"><span class="icon"><i class="fa fa-user-md"></i></span> <span class="name">{{ $item->teacher->t_name }}</span></p>
                        <p class="info-auth"><span class="icon"><i class="fa fas fa-briefcase"></i></span> <span class="name">Trung tâm đào tạo sáng lập bởi TS Nguyễn Hoàng Khắc Hiếu</span></p>
                        <p class="flex flex-jc-sb mt10">
                            <a href="" class="video"><i class="fa fa-play-circle"></i>Học thử</a>
                            <span class="price"> Miễn phí</span>
                        </p>
                    </div>
                </div>

            @endforeach
            <div class="clear"></div>
        </div>
    </div>
</section>
