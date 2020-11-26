<section class="tags_hot">
    <div class="container">
        <div class="section_title heading-before">
            <h2 class="heading-h2 heading-before">Từ khóa nổi bật</h2>
        </div>
        <div class="lists js-tags-home owl-carousel owl-theme">
            @foreach($tags as $item)
             <a href="" target="_blank">{{ $item->t_name }}</a>
            @endforeach
            <div class="clear"></div>
        </div>
    </div>
</section>
