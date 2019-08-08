

//ready - funkcja
$(function () {
	'use strict';
    
    let input1 = $('#imie');
    let input2 = $('#nazwisko');
    let input3 = $('#numerdomu');
    let input4 = $('#kodpocztowy');
    let input5 = $('#miasto');
    let input6 = $('#wyborPizzy');
    let input7 = $('#Sos1'); //to nie jest konieczne
    let input8 = $('#Sos2'); // to nie jest konieczne
    let input9 = $('#RODO'); // to jest niezbędne
    let input10 = $('#button1'); // tylko przycisk wysłania

//Cenówka placków
// let priceTable = [{
// id: 1,
// price: 29
// },

// ]


if (input1.value==null) {
    alert('Proszę podaj imię');
} else if (input2.value==null) {
    alert('Proszę podaj nazwisko');
} else if (input3.value==null) {
    alert('Proszę wpisz numer domu');
} else if (input4.value==null) {
    alert('Proszę podaj kod pocztowy');
} else if (input5.value==null) {
    alert('Proszę podać miasto');
} else if (input6.value==null) {
    alert('Proszę wybrać pizzę');
} else if (input7.value==null) {
    //sos1
} else if (input8.value==null) {
    //sos2
} else if (input9.value==null) {
    alert('Zaznacz zgodę na przetważanie danych osobowych');
}  else {

}

});



// function sprawdz()
// {
//  var temp = document.forms['a'].liczba.value;
//  var wzorzec = /[0-9]/;
 
//   for (var x = 0; x < temp.length; x++)
//   {
//       if (!wzorzec.test(temp.charAt(x)) || (x == 0 && temp.charAt(x) == '0'))  
//       { alert('ZLE wpisales liczby.'); return false; }
//   }
//  alert('DOBRZE, podales liczbe');
// }


//let textBtn = document.createTextNode( "Nie podano imienia" ); // tworzy tekst