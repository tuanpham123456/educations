import 'owl.carousel'
import AutoloadJs from "../../../components/_inc_autoload";
var Home = {
    init: function (){
        this.runBanner()
        this.runTags()
        this.runCourse()
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
            items:5,
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

}
$(function(){
    AutoloadJs.init()
    Home.init()
})
