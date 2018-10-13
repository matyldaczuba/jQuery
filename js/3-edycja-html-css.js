// pobranie tekstu

let h1Text = $('h1').text();

console.log(h1Text);

// ustawinie tekstu

setTimeout(function(){
    $('h2').text("Nowa treść h2");
},2000);