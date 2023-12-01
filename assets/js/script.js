const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


$('.header .gnb .btn-menu').click(function(){
    $('.header .menu-wrap').addClass('on');
    $('.header').toggleClass('hide');
    $(this).toggleClass('on');
    $('body').toggleClass('scroll');

})


var animation1 = bodymovin.loadAnimation({
    container: $('#lottie_1')[0], 
    path: 'https://uploads-ssl.webflow.com/636a19fb40cadc7608cc47df/637cda2f010c8001e7e7561b_splash-intro-loader.json', 
    renderer: 'svg', 
    autoplay: false,
    loop:false
});

$('#link-main').click(function(){

    $('.loader-wrapper .symbol, .intro .loader .link-main').addClass('on');
    animation1.play();
    setTimeout(() => {
        $('.intro').addClass('hide');
        $('body').removeClass('hidden');
    }, 4500);

})

const introTl = gsap.timeline({
    paused:true,
})

introTl.to('.snack1 .item',3,{
    top: '100%',
    yPercent:100,
    repeat:-1,
    rotate:10,
    ease:"none"
},'a')
introTl.to('.snack2 .item',5,{
    top: '100%',
    yPercent:100,
    repeat:-1,
    rotate:30,
    ease:"none"
},'a')
introTl.to('.snack3 .item',4,{
    top: '100%',
    yPercent:100,
    repeat:-1,
    rotate:20,
    ease:"none"
},'a')
introTl.to('.snack4 .item',8,{
    top: '100%',
    yPercent:100,
    repeat:-1,
    rotate:40,
    ease:"none"
},'a')


setTimeout(() => {
    introTl.play()
}, 5500);

$('.sc-title .btn-tab-area button').click(function(){
    idx = $(this).data('idx');
    $(`[data-snack="${idx}"]`).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
    if(idx == 1){
        $('.sc-title .headline-area .btn-go .bg-svg svg path').css("fill","#c4d600");
        $('.sc-title .headline-area .text').css("color","#c4d600");
    }else if(idx == 2){
        $('.sc-title .headline-area .btn-go .bg-svg svg path').css("fill","#f7f33a");
        $('.sc-title .headline-area .text').css("color","#f7f33a");
    }else{
        $('.sc-title .headline-area .btn-go .bg-svg svg path').css("fill","#ff585d");
        $('.sc-title .headline-area .text').css("color","#ff585d");
    }
})

gsap.to('.sc-intro .group-img .img-container img',{
    scrollTrigger:{
        trigger:".sc-intro .group-img",
        start:"0% 100%",
        end:"100% 0%",
        scrub:0,
    },
    scale:1,
})

$('[data-scroll-1]').each(function(i,el){
    gsap.to($(this).find('img'),{
        scrollTrigger:{
            trigger:el,
            start:"0% 100%",
            end:"100% 0%",
            scrub:0,
        },
        rotate:$(this).data('scroll-1'),
    })
})

$('[data-scroll-2]').each(function(i,el){
    gsap.to($(this),{
        scrollTrigger:{
            trigger:el,
            start:"0% 100%",
            end:"100% 0%",
            scrub:0,
        },
        scale:$(this).data('scroll-2'),
    })
})


horiAni = gsap.to('.sect-horizontal .sticky .wrap',{
    scrollTrigger:{
        trigger:".sect-horizontal",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        invalidateOnRefresh:true,
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    },
    ease:'none'
})

$('[data-scroll-3]').each(function(i,el){
    gsap.to($(this).find('img'), {
    scrollTrigger: {
        trigger: el,
        containerAnimation: horiAni,
        start: "left center",
        toggleActions: "play none none reset",
        scrub:1,
    },
     rotation : $(this).data('scroll-3'),
    });
})




var swiper1 = new Swiper(".sc-move .swiper", {
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
      },
      speed: 5000,
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 'auto',

});

var swiper2 = new Swiper(".sc-geloof .top .swiper", {
      slidesPerView: 2,
      loop:true,
      spaceBetween:24,
      navigation: {
        nextEl: ".sc-geloof .inner .control .btn-next",
        prevEl: ".sc-geloof .inner .control .btn-prev",
      },
});

var swiper3 = new Swiper(".sc-geloof .bottom .swiper", {
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
      },
      speed: 5000,
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 5,
});

$('.sc-faq .question-area').click(function(){
   
    if($(this).hasClass('on')){
        $(this).removeClass('on').siblings('.answer').slideUp();
    }else{
        $('.sc-faq .question-area').removeClass('on').siblings('.answer').slideUp();
        $(this).addClass('on').siblings('.answer').slideDown();
    }
})

gsap.to('.sc-follow .img-wrap .img-container img',{
    scrollTrigger:{
        trigger:".sc-follow .img-wrap",
        start:"0% 100%",
        end:"100% 0%",
        scrub:0,
    },
    scale:1,
})

gsap.from('.sc-move .bg-img',{
    scrollTrigger:{
        trigger:".sc-move .bg-img",
        start:"0% 100%",
        end:"100% 0%",
        scrub:0,
    },
    rotate:-16,
})

