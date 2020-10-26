<section class="lecture">
    <div class="container">
        <div class="section_title heading-before">
            <h2 class="heading-h2 heading-before">Đội ngũ giảng viên</h2>
        </div>
        <div class="lists js-lists-lecture owl-carousel owl-theme ">
            @for($i = 1; $i <= 8; $i++)
                <div class="item">
                    <div class="item-header">
                        <a href="">
                            <img src="{{ asset('images/avatar.jpg') }}" alt="">
                        </a>
                    </div>
                    <div class="info">
                        <h6>Tuan Pham</h6>
                        <p class="info-auth"><span class="icon"><i class="fa fas fa-briefcase"></i></span> <span class="name">Trung tâm đào tạo sáng lập bởi TS Nguyễn Hoàng Khắc Hiếu</span></p>
                    </div>
                    <div class="dashboard">
                        @for($j = 1; $j <= 3; $j++)
                            <div class="box-item">
                                <span>Nội dung</span>
                                <span>100</span>
                            </div>
                        @endfor
                    </div>
                    <a href="" title="Xem thêm" class="btn btn-secondary">Xem thêm</a>
                </div>

            @endfor
            <div class="clear"></div>
        </div>
    </div>
</section>
