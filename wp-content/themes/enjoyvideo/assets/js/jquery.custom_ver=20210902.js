
(function($){ //create closure so we can safely use $ as alias for jQuery

    $(document).ready(function(){

        "use strict";

        /*-----------------------------------------------------------------------------------*/
        /*  Superfish Menu
        /*-----------------------------------------------------------------------------------*/
        // initialise plugin
        var example = $('.sf-menu').superfish({
            //add options here if required
            delay:       100,
            speed:       'fast',
            autoArrows:  false  
        }); 
        
        /*-----------------------------------------------------------------------------------*/
        /*  Featured Content
        /*-----------------------------------------------------------------------------------*/
        $('#featured-content .gradient').fadeIn("slow");        
        $('#featured-content .hentry .entry-header').fadeIn("slow");

        $('.entry-content .wp-block-video').eq(0).addClass('first-video').end();        
        $('.entry-content .wp-block-embed').eq(0).addClass('first-video').end();
        $('.entry-content .wp-video').eq(0).addClass('first-video').end();
        $('.entry-content iframe').eq(0).addClass('first-video').end();
        $('.entry-content video').eq(0).addClass('first-video').end();
        $('.entry-content .wp-block-embed iframe').eq(0).removeClass('first-video').end();
        $('.entry-content .first-video').eq(1).removeClass('first-video').end();

        var video_height = $('.first-video').height();
        $('article.has-embed').css('padding-top',video_height+25);

        var video_height = $('.wp-video').height();
        $('article.has-embed').css('padding-top',video_height+25);

        var video_height = $('.wp-block-video').height();
        $('article.has-embed').css('padding-top',video_height+25);

        $(window).on('resize', function() {

            var video_height_r = $('.first-video').height();
            $('article.has-embed').css('padding-top',video_height_r+25);

            var video_height_r = $('.wp-video').height();
            $('article.has-embed').css('padding-top',video_height_r+25);   

            var video_height_r = $('.wp-block-video').height();
            $('article.has-embed').css('padding-top',video_height_r+25);   

        });

        /*-----------------------------------------------------------------------------------*/
        /*  Back to Top
        /*-----------------------------------------------------------------------------------*/
        // hide #back-top first
        $("#back-top").hide();

        $(function () {
            // fade in #back-top
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn('200');
                } else {
                    $('#back-top').fadeOut('200');
                }
            });

            // scroll body to 0px on click
            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        });                          

    });

})(jQuery);

/* Sticky Sidebar */
jQuery('.sidebar').theiaStickySidebar({
    additionalMarginTop: 25,
    additionalMarginBottom: 0
});   