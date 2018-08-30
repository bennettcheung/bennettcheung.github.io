jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    $(".support").hide();

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    $("#allExp").click(function(){
        $(".support").slideDown();
        $('#softwareExp').removeClass('active');
        $("#allExp").addClass('active');
        });
    $("#softwareExp").click(function(){
        $(".support").slideUp();
        $('#allExp').removeClass('active');
        $("#softwareExp").addClass('active');
    });

});
