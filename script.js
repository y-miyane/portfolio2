
/* menuボタン*/

    document.addEventListener('scroll', function() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
        if (scrollTop > 750) {
            document.querySelector('.menu-trigger').classList.add('menu-color-black');
        } else {
            document.querySelector('.menu-trigger').classList.remove('menu-color-black');
        }
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

/* menuボタン　end*/

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

    /* .plan-secにクラスfade-inを追加*/


    document.addEventListener('DOMContentLoaded', function() {
        const marriageCat = document.querySelector('.marriage_cat');
        const observer = new IntersectionObserver(handleIntersection);
        
        observer.observe(marriageCat);
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadein', 'scrollin');
                }
            });
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const preShootCat = document.querySelector('.pre-shoot_cat');
        const observer = new IntersectionObserver(handleIntersection);
        
        observer.observe(preShootCat);
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadein', 'scrollin');
                }
            });
        }
    });


    document.addEventListener('DOMContentLoaded', function() {
        const familyPhotoCat = document.querySelector('.family-photo_cat');
        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(familyPhotoCat);
        
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadein', 'scrollin');
                }
            });
        }
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

    const articleSecList = document.querySelectorAll('.article-sec_list');
    const observer = new IntersectionObserver(handleIntersection);
    
    
    articleSecList.forEach(handleIntersection => {
        observer.observe(handleIntersection);
    });
    
        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadein', 'scrollin');
                    var listItems = entry.target.children;
                    for (let i = 0; i < listItems.length; i++) {
                        listItems[i].classList.add('fadein', 'scrollin');
                    }
                }
            });
        }
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






    
    
    

        
        

        



