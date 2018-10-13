// pobranie tekstu

let h1Text = $('h1').text();

console.log(h1Text);

// ustawinie tekstu

//setTimeout(function(){
//    $('h2').text("Nowa treść h2");
//},2000);

//pobranie html

let html = $('body').html();

console.log(html);

// zmiana html
//    $('body').html("<h3>Nowa zawartość body</h3><div>lorem lorem</div>");

// dodawanie tresci jak i html

$('h2').append("<span style='color: red'>Span w h2</span>");

// dodawanie za i przed element tresci jak i html

$('a').before('<div style="padding: 30px; background: green"> </div>');

//usuwanie zawartosci wraz z wybranym elementem

$('h1').remove();

// usuwanie tylko zawartosci elementu

$('h2').empty();

// style

$('.paragraf-next').css({
    'font-size': '2rem',
    'color': 'blue',
    'padding': '20px'
});


//dodawanie i usuwanie klas
//
//setTimeout(function () {
//    //    $('body').addClass("decor");
//    $('body').removeClass("page");
//
//}, 2000);

setInterval(function(){
    $('body').toggleClass('decor');
},1500)
