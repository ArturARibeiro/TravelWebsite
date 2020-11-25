// $(function () {
//     $("#").draggable({
//         containment: 'parent'
//     });
// });



$('#next').click(function () {
    $('#slide').animate({ scrollLeft: '+=640' }, 500, 'easeInOutQuad');
});

$('#prev').click(function () {
    $('#slide').animate({ scrollLeft: '-=640' }, 500, 'easeInOutQuad');
});

$('#swipeup').click(function () {
    targetOffset = $('#aboutus').offset().top;
    $('html, body').animate({ scrollTop: targetOffset }, 700);
});