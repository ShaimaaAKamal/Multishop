$(".owl-carousel").owlCarousel({
    margin:20,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    loop: true,
    responsive: {
        0:{
            items:2
        },
        768:{
            items:4      

        },
        992:{
            items:4          

        },
        1200:{
            items:6
        }
    }
});




$(".product-carousel").owlCarousel({
    margin:20,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    loop: true,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2    

        },
        992:{
            items:4          

        }
    }
});
