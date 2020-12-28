<section class="section_one">
    <div class="container">
        <div class="section_title heading-before">
            <h2 class="heading-h2 heading-before">Kỹ năng cùng công việc Kyna</h2>
            <p><span style="color:#50ad4e">Kyna</span> và <span style="color:#00b9f2">VietnamWorks</span> giúp bạn nâng tầm sự nghiệp cùng với các khóa học phát triển kỹ năng cho công việc.</p>
        </div>
        <div class="section_tags">
            <div class="list js-tags owl-carousel owl-theme" style="text-align: center">
                @foreach($category as $item)
                    <a href="{{ route('ajax_get.course.by_category',$item->id) }}" data-id="{{ $item->id }}"  class="js-course-by-category" title="{{ $item->c_name }}">{{ $item->c_name }}</a>
                @endforeach
            </div>

        </div>
        <div class="lists" id="courseHtml">
            @include('pages.home.include._inc_course_list',['courses' => $courses])
        </div>
    </div>
</section>
