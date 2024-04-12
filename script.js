
ScrollReveal({ 
    reset: true,
    distance:"20px",
    duration: 2000,
    delay:50,
    });
    

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

/* about-sec_text-areaにクラスfade-in　scrollinを追加*/

    document.addEventListener('DOMContentLoaded', function() {
        const aboutSecElement = document.querySelector('.about-sec_text-area');
    
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutSecElement.classList.add('fadein', 'scrollin');
                }
            });
        }
    
        const observer = new IntersectionObserver(handleIntersection);
    
        observer.observe(aboutSecElement);
    });
    








   /* header-gnav_pcにクラスfade-inを追加*/

   $(window).on('load', function () {
    $('.header-gnav_pc').addClass("fade-in");
});


    /* top-header-nav-area_taglineをopacity: 1;　spanにクラスmoveを追加*/
document.addEventListener('DOMContentLoaded', function() {
    const jpnParagraph = document.querySelector('.jpn');
    const spanElements = document.querySelectorAll('.top-header-nav-area_tagline .jpn span');
    
    jpnParagraph.style.opacity = '1';

    spanElements.forEach(function(span) {
        span.classList.add('move');
    });
});


    /* top-header-nav-area_tagline .engにクラスfade-inを追加*/
$(window).on('load', function () {
    $('.top-header-nav-area_tagline .eng').addClass("fade-in");
});



document.addEventListener('DOMContentLoaded', function() {
    // IntersectionObserverの作成
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // .plan-sec要素が画面内に入ったら
            if (entry.isIntersecting) {
                document.querySelector('.marriage_cat').classList.add('fadein');
                document.querySelector('.marriage_cat').classList.add('scrollin');
            }
        });
    });

    // .plan-sec要素を取得して監視
    const planSecElement = document.querySelector('.plan-sec');
    observer.observe(planSecElement);
});


const planSecElement = document.querySelector('.plan-sec');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            planSecElement.classList.add('fadein', 'scrollin');
        }
    });
});

observer.observe(planSecElement);


// blog
document.addEventListener('DOMContentLoaded', function() {
    const blogSecElement = document.querySelector('.blog-sec');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const articleList = document.querySelector('.article-sec_list');
                articleList.classList.add('fadein', 'scrollin');
                const listItems = document.querySelectorAll('.article-sec_list li');
                listItems.forEach(item => {
                    item.classList.add('fadein', 'scrollin');
                });
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(blogSecElement);
});

// voice
document.addEventListener('DOMContentLoaded', function() {
    const voiceSecElement = document.querySelector('.voice-sec');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const articleSec = document.querySelector('.voice-sec .article-sec');
                articleSec.classList.add('fadein', 'scrollin');
                const articleList = document.querySelector('.voice-sec .article-sec_list');
                articleList.classList.add('fadein', 'scrollin');
                const listItems = document.querySelectorAll('.voice-sec .article-sec_list li');
                listItems.forEach(item => {
                    item.classList.add('fadein', 'scrollin');
                });
                const link = document.querySelector('.voice-sec .article-sec_link');
                link.classList.add('fadein', 'scrollin');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(voiceSecElement);
});







    
    
    

        
        

        



