$(function () {
    'use strict';

    let firstName = $('#imie');
    let lastName = $('#nazwisko');
    let street = $('#numerdomu');
    let streetNo = $('#kodpocztowy');
    let city = $('#miasto');
    let pizza = $('#wyborPizzy');
    let price = $('#price');
    let garlicSauce = $('#Sos1'); //to nie jest konieczne
    let tomatoSauce = $('#Sos2'); // to nie jest konieczne
    let agree = $('#RODO'); // to jest niezbędne
    let button = $('#button1'); // tylko przycisk wysłania
    let errors = $('#errors');

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


    //zdarzenie obsługujące wybór pizzy
    pizza.change(function () {
        let pizzaPrice = 0;
        let pizzaType = $(this).val(); // this - to jest pole któe zmieniłem
        

        //Poniżej musi być ten "element" - to jest, bo tak - 
        //bez żadnego wyjaśnienia, żeby funkcja wiedziała po czym przejść
        priceTable.forEach(function (element) {
            if (element.id == pizzaType) {
                pizzaPrice = element.price
                price.text(pizzaPrice + " PLN")
            }
        })


    });





    //             formPizzaOrder.submit(function () { //funkcja anonimowa function()
    //                 errors.empty(); //- czyścimy za każdym razem

    //                 function.(checkValue($.trim(firstName.val()))) {

    //                 }
    //             });

    // console.log(JSON.stringify(orderObject));
    // console.log(ordrObject);
    // return false;
});