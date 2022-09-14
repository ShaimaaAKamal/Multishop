$(".owl-carousel").owlCarousel({
    margin:20,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    loop: true,
    // center: true,
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
