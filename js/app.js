$(window).scroll(function(){
    var plans = $('#plan_section').offset().top;

    if($(this).scrollTop() > plans){
        $('.nav-link').addClass("text-muted");
        $('#navbar-top').addClass("bg-white");
    }else{
        $('.nav-link').removeClass("text-muted");
        $('#navbar-top').removeClass("bg-white");
    }
})

$('#next').click(function () {
    $('#slide').animate({ scrollLeft: '+=640' }, 500, 'easeInOutQuad');
});

$('#prev').click(function () {
    $('#slide').animate({ scrollLeft: '-=640' }, 500, 'easeInOutQuad');
});

$('#swipeup').click(function () {
    targetOffset = $('#plans').offset().top;
    $('html, body').animate({ scrollTop: targetOffset - 12 }, 700);
});