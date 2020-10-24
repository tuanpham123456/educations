import 'owl.carousel' 
var Home = {
    init: function (){
        this.runBanner()
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
        
    }
}
$(function(){
    Home.init()
})