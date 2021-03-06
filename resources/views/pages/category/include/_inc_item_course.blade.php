<div class="item list-course item-3-0  mb20">
    <div class="box-course" style="margin: 10px">
        <div class="avatar">
            <div class="img">
                <a href="{{ route('get.course.render',['slug' => $item->c_slug.'-cr']) }}">
                    <img src="{{ asset(pare_url_file($item->c_avatar)) }}" alt="">
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
            <h3 class="title"><a href="">{{ $courses->c_name }}</a></h3>
            <p class="info-auth"><span class="icon"><i class="fa fa-user-md"></i></span> <span class="name">{{ $courses->teacher->t_name }}</span></p>
            <p class="info-auth"><span class="icon"><i class="fa fas fa-briefcase"></i></span> <span class="name">{{ $courses->teacher->t_job }}</span></p>
            <p class="flex flex-jc-sb mt10">
                <a href="" class="video"><i class="fa fa-play-circle"></i>Học thử</a>
                <span class="price"> Miễn phí</span>
            </p>
        </div>
    </div>
</div>
