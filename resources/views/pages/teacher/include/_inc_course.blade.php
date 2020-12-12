<div class="teacher-course">
    <div class="container">
        <h4 class="g-title mt20">Các khóa học giảng dạy</h4>
        <div class="box-content">
            <div class="lists mt20" style="margin: -10px">
                @for($i=1;$i<=12;$i++)
                    <div class="item list-course item-4-0  mb20">
                        <div class="box-course" style="margin: 10px">
                            <div class="avatar">
                                <div class="img">
                                    <a href="">
                                        <img src="{{ asset('images/section_1.jpg') }}" alt="">
                                    </a>
                                    <div class="img_badget">
                                        <p class="flex flex-jc-sb pl10 pr10">
                                            <span>
                                                <i class="fa fa-star"> 4.8 (4)</i>
                                            </span>
                                            <span>
                                                <i class="fa fa-user"> 25 học viên </i>
                                                </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <h3 class="title"><a href="">Tuan pham</a></h3>
                                <p class="info-auth"><span class="icon"><i class="fa fa-user-md"></i></span> <span class="name">Tuan Pham</span></p>
                                <p class="info-auth"><span class="icon"><i class="fa fas fa-briefcase"></i></span> <span class="name">Lap trình php</span></p>
                                <p class="flex flex-jc-sb mt10">
                                    <a href="" class="video"><i class="fa fa-play-circle"></i>Học thử</a>
                                    <span class="price"> Miễn phí</span>
                                </p>
                            </div>
                        </div>
                    </div>
                @endfor
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>
