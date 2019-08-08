$(function () {
    'use strict';

    
    let pizza = $('#wyborPizzy');
    let price = $('#price');
    let garlicSauce = $('#Sos1'); 
    let tomatoSauce = $('#Sos2'); 
    let agree = $('#RODO'); 
    let button = $('#button1'); 
    // let errors = $('#errors');
 
    //Cenówka placków
    let priceTable = [{
            id: 1,
            price: 29
        },
        {
            id: 2,
            price: 34
        },
        {
            id: 3,
            price: 36
        },
        {
            id: 4,
            price: 36
        }
    ]

    //Zdarzenie obsługujące wybór pizzy
    pizza.change(function () {
        let pizzaPrice = 0;
        let pizzaType = $(this).val(); 

        priceTable.forEach(function (element) {
            if (element.id == pizzaType) {
                pizzaPrice = element.price
                price.text(pizzaPrice + " PLN")
            }
        })
    });  

  
   
    function eventHandler() {

        if (firstName=='') {
            alert('Proszę podaj imię');
        } else if (lastName=='') {
            alert('Proszę podaj nazwisko');
        } else if (street.value==null) {
            alert('Proszę wpisz numer domu');
        } else if (streetNo.value==null) {
            alert('Proszę podaj kod pocztowy');
        } else if (city.value==null) {
            alert('Proszę podać miasto');
        } else if (pizza.value==null) {
            alert('Proszę wybrać pizzę');
        } else if (agree.value==null) {
            alert('Zaznacz zgodę na przetważanie danych osobowych');
        }  else {
            alert('Wysłano zgłoszenie');
        }
        console.log(firstName); 
    }
    button.onclick = eventHandler;
    
    // function eventHandler() {
    //     errors = false;
     
    //     if(document.formularz.pole.value.length < 1) {
    //        errors = "Puste pole!";
    //     }
     
    //     if(errors) {
    //        alert(errors);
    //        return false;
    //     } else {
    //        return true;
    //     }
    //  }
   
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
