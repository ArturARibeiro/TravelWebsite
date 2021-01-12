// $(function () {
//     $("#").draggable({
//         containment: 'parent'
//     });
// });

$(window).scroll(function(){
    var plans = $('#plan_section').offset().top;

    if($(this).scrollTop() > plans){
        console.log('foi')
        $('.nav-link').addClass("text-muted");
    }else{
        $('.nav-link').removeClass("text-muted");
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
    $('html, body').animate({ scrollTop: targetOffset }, 700);
});