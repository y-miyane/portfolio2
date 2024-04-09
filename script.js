
ScrollReveal({ 
    reset: true,
    distance:"20px",
    duration: 2000,
    delay:50,
    });
    ScrollReveal().reveal('.about-sec_text-area.scrollin .about-sec_ttl .jpn', { delay: 50, origin:"bottom"});
    ScrollReveal().reveal('.about-sec_text-area.scrollin .about-sec_ttl .eng', { delay: 50, origin:"bottom"});
    ScrollReveal().reveal('.about-sec_lead', { delay: 50, origin:"bottom"});


    ScrollReveal().reveal('.sec-ttl .jpn', { delay: 50, origin:"bottom"});
    ScrollReveal().reveal('.sec-ttl .eng', { delay: 50, origin:"bottom"});
    ScrollReveal().reveal('.sec-link', { delay: 50, origin:"bottom"});
    ScrollReveal().reveal('.plan-sec_sup-text.scrollin', { delay: 50, origin:"bottom"});
    ScrollReveal().reveal('.plan-sec_sup-text.scrollin', { delay: 50, origin:"bottom"});

    

    const header = document.querySelector('.trace-nav-set');
    window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 600) {
    header.classList.add('fixed');
    } else {
    header.classList.remove('fixed');
    }
    });


    const fadein = document.getElementsByClassName('blog-sec');
    window.addEventListener('scroll' , () => {
        let scrollY =window.scrollY
        if(4000 < scrollY){
        fadein.classList.add('active');
        }
    })

    document.addEventListener('DOMContentLoaded', function() {
    const slideMenuBtn = document.querySelector('.slide-menu_btn');
    const slideMenuNav = document.querySelector('.slide-menu_nav');

    slideMenuBtn.addEventListener('click', function(event) {
    event.preventDefault();         
    const isOpen = slideMenuNav.classList.contains('open');

    if (isOpen) {
        slideMenuNav.classList.remove('open');
    } else {
        slideMenuNav.classList.add('open');
    }
    });
    });

    document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.querySelector('.menu-trigger');

    menuTrigger.addEventListener('click', function() {
        menuTrigger.classList.toggle('active');
    });
    });


    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 200){
                $(this).addClass('scrollin');
                }
            });
        });
    });



    $(document).ready(function() {
        $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $('.jpn').each(function() {
                var objectBottom = $(this).offset().top + $(this).outerHeight();
                
                if (objectBottom < windowBottom) {
                    $(this).css('opacity', 1);
                } else {
                    $(this).css('opacity', 0);
                }
            });
        }).scroll();
    });

   /* header-gnav_pcにクラスfade-inを追加*/

   $(window).on('load', function () {
    $('.header-gnav_pc').addClass("fade-in");
});

    
    
    

        
        

        



