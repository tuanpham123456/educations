<section class="section_two">
    <div class="container">
        <div class="section_title heading-before">
            <h2 class="heading-h2 heading-before">Khóa học <span style="color: #ff7818">0 đồng</span></h2>
        </div>
        <div class="lists js-lists-course-home owl-carousel owl-theme ">
            @for($i = 1; $i <= 8; $i++)
                <div class="item  mr20 box-course mb20">
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
                        <h3 class="title"><a href="">Kỹ năng giao tiếp công sở</a></h3>
                        <p class="info-auth"><span class="icon"><i class="fa fa-user-md"></i></span> <span class="name">Tuan Pham</span></p>
                        <p class="info-auth"><span class="icon"><i class="fa fas fa-briefcase"></i></span> <span class="name">Trung tâm đào tạo sáng lập bởi TS Nguyễn Hoàng Khắc Hiếu</span></p>
                        <p class="flex flex-jc-sb mt10">
                            <a href="" class="video"><i class="fa fa-play-circle"></i>Học thử</a>
                            <span class="price"> Miễn phí</span>
                        </p>
                    </div>
                </div>

            @endfor
            <div class="clear"></div>
        </div>
    </div>
</section>
