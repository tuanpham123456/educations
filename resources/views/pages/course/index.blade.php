@extends('layouts.app_master_frontend')
@section('style')
    <link rel="stylesheet" href="{{ asset('css/course.css') }}">
@stop
@section('content')
    @include('pages.course.include._inc_breadcrumb')
    @include('pages.course.include._inc_header_course',['courseDetail' => $courseDetail])
    <div class="container">
        <div class="box" style="position:relative;">
            <div class="box-70 mr10">
                <div class="box-section" >
                    <h4 class="box-title"> Bạn sẽ được học gì</h4>
                    <div class="box-content">
                        Có những kỹ năng sử dụng windows 10 thành thạo, kỹ năng sử dụng Internet, kỹ năng sử dụng các chương trình thông dụng trên máy tính.
                        Biết cách bảo vệ những tài khoản Gmail, FB tránh bị hack.
                        Có thể áp dụng trực tiếp vào công việc hàng ngày.
                        Về lâu dài sẽ làm tăng năng suất lao động vì làm giảm thời gian ""mày mò"", vì kỹ năng đã được đào tạo qua khóa học"
                    </div>
                </div>
                <div class="box-section" >
                    <h4 class="box-title"> Nội dung khóa học</h4>
                    <div class="box-content">
                        Đang cập nhật
                    </div>
                </div>
                <div class="box-section" >
                    <h4 class="box-title"> Giới thiệu khóa học</h4>
                    <div class="box-content">
                        Đang cập nhật
                    </div>
                </div>
                <div class="box-section teacher" >
                    <h4 class="box-title"> Thông tin giảng viên <a href=""> Chi tiết <i class="fa fa-chevron-circle-right"></i></a></h4>
                    <div class="box-content">
                        <div class="box">
                            <div class="box-30">
                                <div class="info">
                                    <a href=""><img src="{{ asset('/images/tp.jpg') }}" alt=""></a>
                                    <p class="name"><strong>Tuan Pham (TP_0403)</strong></p>
                                    <p class="job"><i class="fa fa-briefcase"> Nhân viên IT</i></p>
                                </div>
                            </div>
                            <div class="box-70">
                                <div class="content">
                                    <div class="item">
                                        <p> Chức vụ</p>
                                        <p> Nguyên giám đốc Chiến lược Công ty Chứng Khoán Mirea Asset (Việt Nam)</p>
                                    </div>
                                    <div class="item">
                                        <p> Chức vụ</p>
                                        <p> Nguyên giám đốc Chiến lược Công ty Chứng Khoán Mirea Asset (Việt Nam)</p>
                                    </div>
                                    <div class="item">
                                        <p> Chức vụ</p>
                                        <p> Nguyên giám đốc Chiến lược Công ty Chứng Khoán Mirea Asset (Việt Nam)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-section teacher-course" >
                    <h4 class="box-title"> Khóa học của giảng viên <a href="" title="Xem thêm"> Xem thêm </a></h4>
                    <div class="box-content">
                        <div class="lists" style="margin: -10px">
                            @forelse($courses as $item)
                                @include('pages.category.include._inc_item_course',['courses' => $item])
                            @empty
                                <p>Dữ liệu chưa được cập nhật</p>
                            @endforelse
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="box-section teacher-course" >
                    <h4 class="box-title"> Khóa học phù hợp với bạn <b style="color: #50ad4e">Tuan Pham</b> <a href="" title="Xem thêm"> Xem thêm </a></h4>
                    <div class="box-content">
                        <div class="lists" style="margin: -10px">
                            @forelse($courses as $item)
                                @include('pages.category.include._inc_item_course',['courses' => $item])
                            @empty
                                <p>Dữ liệu chưa được cập nhật</p>
                            @endforelse
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="box-section vote" >
                    <h4 class="box-title"> Học viên nói gì ?</h4>
                    <div class="box-content">
                        <div class="box">
                            <div class="box-30 dashboard">
                                <div class="vote-total-age">0</div>
                                <p class="vote-star">
                                    @for($i=1; $i<=5; $i++)
                                        <span class="fa fa-star"></span>
                                    @endfor
                                </p>
                                <p class="desc">(<span class="vote-total">0</span> đánh giá) </p>
                            </div>
                            <div class="box-70">
                                <div class="list-vote">
                                    @for($i = 5; $i > 0; $i--)
                                        <div class="item flex flex-jc-sb">
                                            <span class="first">{{ $i }} <i class="fa fa-star"></i></span>
                                            <div class=""><div class="progress" style="width:0%"></div></div>
                                            <span class="last">5%</span>
                                        </div>
                                    @endfor
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-30" id="rightSidebar">
                <div class="right-section" style="padding: 0">
                    <img class="thumb" src="{{ asset('images/section_1.jpg') }}" alt="">
                    <div class="right-section-box">
                        <p class="price"><i class="fa fa-tags"></i><span>{{ number_format($courseDetail->c_price,0,',','.') }}đ</span></p>
                        <a href="" class="btn btn-success btn-radius"> Mua ngay</a>
                        <a href="" class="btn btn-pink btn-radius"> Thêm giỏ hàng</a>
                        <div class="footer">
                            <a href="" class="facebook"><i class="fa fa-facebook"></i></a>
                            <a href="" class="google"><i class="fa fa-google"></i></a>
                            <a href="" class="twitch"><i class="fa fa-twitch"></i></a>
                        </div>
                    </div>
                </div>
                <div class="right-section">
                    <h4 class="right-section-title"> {{ $courseDetail->c_name }}</h4>
                    <div class="list-course">
                        <a href=""><i class="fa fa-play-circle"></i> Bài mở đầu</a>
                        <a href=""><i class="fa fa-play-circle"></i> Bài 1: Nếu tăng giá</a>
                        <a href=""><i class="fa fa-play-circle"></i> Bài 2: Nếu tăng giá nhanh</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop
@section('js')
    <script src="{{ asset('js/course.js') }}"></script>
@stop
