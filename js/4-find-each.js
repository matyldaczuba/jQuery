var body = $('body');

var p = body.find('.paragraf').eq(0);

p.css({
    'margin': '20px',
    'color': 'green',
    'font-size': '3rem'
})


console.log(p);

$('.paragraf').each(function(index, element){
    $(this).append(`<span style='color: orange;'> INDEX: ${index}</span>`);
})