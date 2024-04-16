
ScrollReveal({ 
    reset: true,
    distance:"20px",
    duration: 2000,
    delay:50,
    });
    

    

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
     /* top-header-nav-area_taglineにクラスmoveを追加*/

$(window).on('load', function () {
    $('.top-header-nav-area_tagline').addClass("move");
});

    /* top-header-nav-area_tagline .engにクラスfade-inを追加*/
$(window).on('load', function () {
    $('.top-header-nav-area_tagline .eng').addClass("fade-in");
});


     /* gallery-sec_inner .engにクラスfade-inを追加*/
document.addEventListener('DOMContentLoaded', function() {
    const gallerySecInner = document.querySelector('.gallery-sec_inner');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gallerySecInner.classList.add('fadein', 'scrollin');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(gallerySecInner);
});



    /* plan-secにクラスfade-inを追加*/

document.addEventListener('DOMContentLoaded', function() {
    const planSec = document.querySelector('.plan-sec');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                planSec.classList.add('fadein', 'scrollin');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(planSec);
});

    /* .plan-sec_category-listにクラスfade-inを追加*/

document.addEventListener('DOMContentLoaded', function() {
    const categoryList = document.querySelector('.plan-sec_category-list');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                categoryList.classList.add('fadein', 'scrollin');
                const listItems = categoryList.querySelectorAll('li');
                listItems.forEach(item => {
                    item.classList.add('fadein', 'scrollin');
                });
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(categoryList);
});








// blog
document.addEventListener('DOMContentLoaded', function() {
    const blogSecElement = document.querySelector('.blog-sec');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                blogSecElement.classList.add('fadein', 'scrollin');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(blogSecElement);
});



document.addEventListener('DOMContentLoaded', function() {
    const articleListElement = document.querySelector('.article-sec_list');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                articleListElement.classList.add('fadein', 'scrollin');
                const listItems = articleListElement.querySelectorAll('li');
                listItems.forEach(item => {
                    item.classList.add('fadein', 'scrollin');
                });
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(articleListElement);
});


document.addEventListener('DOMContentLoaded', function() {
    const articleLinkElement = document.querySelector('.article-sec_link');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                articleLinkElement.classList.add('fadein', 'scrollin');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(articleLinkElement);
});




// voice
document.addEventListener('DOMContentLoaded', function() {
    const voiceSecElement = document.querySelector('.voice-sec.article-sec');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                voiceSecElement.classList.add('fadein', 'scrollin');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(voiceSecElement);
});






document.addEventListener('DOMContentLoaded', function() {
    const articleSecLink = document.querySelector('.article-sec_link_2');

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                articleSecLink.classList.add('fadein', 'scrollin');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(articleSecLink);
});






    
    
    

        
        

        



