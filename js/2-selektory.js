// pobieranie po tagu html

var pAll = $('div p');
console.log(pAll);

// pobieranie po klasie / id

var pClass = $('.paragraf');
console.log(pClass);

// pobieranie po atrybucie

let link = $("[href^='mailto:']");
console.log(link);

// pobranie tylko o klasie paragraf (zadnej innej)

let p = $('.paragraf:not(.paragraf-next)');
console.log(p);

