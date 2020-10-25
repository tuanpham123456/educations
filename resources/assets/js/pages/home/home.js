import 'owl.carousel' 
var Home = {
    init: function (){
        this.runBanner()
        this.runTags()
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
    }
}
$(function(){
    Home.init()
})