import 'owl.carousel'
import AutoloadJs from "../../../components/_inc_autoload";
import Toastr from "toastr";
var Home = {
    init: function (){
        this.runBanner()
        this.runTags()
        this.runCourse()
        this.showCourseByCategory()
    },
    runBanner(){
        $('.js-banner').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

    },
    runTags(){
        $('.js-tags').owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items:7,
            smartSpeed:450,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

        })
    },
    runCourse(){
        $('.js-lists-course-home').owlCarousel({
            loop:true,
            nav:true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items:4,
            smartSpeed:450,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

        })
        $('.js-tags-home').owlCarousel({
            loop:false,
            dots:false,
            nav:false,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items:6,
            smartSpeed:450,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

        })
        $('.js-lists-lecture').owlCarousel({
            loop:false,
            dots:false,
            nav:false,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items:3,
            smartSpeed:450,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

        })
    },
    showCourseByCategory(){
        $(".js-course-by-category").click(function (event){
            event.preventDefault()
            $(".js-course-by-category").removeClass('active')
            let $this = $(this);
            $this.addClass('active')
            let URL    = $this.attr('href')
            if (URL){
                $.ajax({
                    url: URL,
                    beforeSend: function( xhr ) {
                        //show loading
                        $(".js-loading-1").show()
                    }
                }).done(function( results ) {
                    console.log(results)
                    if(results.coursesHtml){
                        $("#courseHtml").html(results.coursesHtml)
                    }
                });
            }
        })
    },
}
$(function(){
    AutoloadJs.init()
    Home.init()
})
