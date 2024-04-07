
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

        $(function(){
            $(window).scroll(function (){
                $('.fadein_scrollin').each(function(){
                    var position = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > position - windowHeight + 200){
                        $(function(){
                            $('.fadein_scrollin').each(function(i){
                                $(this).delay(i * 200).queue(function(){
                                    $(this).addClass('active');
                                });
                            });
                        });
                    }
                });
            });
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

        document.addEventListener('DOMContentLoaded', function() {
        const menuTrigger = document.querySelector('.menu-trigger');
        const slideMenu = document.querySelector('.slide-menu');
        menuTrigger.addEventListener('click', function(event) {
        event.preventDefault();        
        this.classList.toggle('active');
        slideMenu.classList.toggle('active');
        });
        });

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


        



