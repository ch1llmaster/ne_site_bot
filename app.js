let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible && tg.MainButton.text === "Вы выбрали товар 1!") {
        tg.MainButton.hide();
        btn1.data = "Примерить";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
        btn1.data = "Выбрано";
    }
});

btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible && tg.MainButton.text === "Вы выбрали товар 2!") {
        tg.MainButton.hide();
        btn2.data = "Примерить";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 2!");
        item = "2";
        tg.MainButton.show();
        btn2.data = "Выбрано";
    }
});

btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible && tg.MainButton.text === "Вы выбрали товар 3!") {
        tg.MainButton.hide();
        btn3.data = "Примерить";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 3!");
        item = "3";
        tg.MainButton.show();
        btn3.data = "Выбрано";
    }
});

btn4.addEventListener("click", function(){
    if (tg.MainButton.isVisible && tg.MainButton.text === "Вы выбрали товар 4!") {
        tg.MainButton.hide();
        btn4.data = "Примерить";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 4!");
        item = "4";
        tg.MainButton.show();
        btn4.data = "Выбрано";
    }
});

btn5.addEventListener("click", function(){
    if (tg.MainButton.isVisible && tg.MainButton.text === "Вы выбрали товар 5!") {
        tg.MainButton.hide();
        btn5.data = "Примерить";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 5!");
        item = "5";
        tg.MainButton.show();
        btn5.data = "Выбрано";
    }
});

btn6.addEventListener("click", function(){
    if (tg.MainButton.isVisible && tg.MainButton.text === "Вы выбрали товар 6!") {
        tg.MainButton.hide();
        btn6.data = "Примерить";
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 6!");
        item = "6";
        tg.MainButton.show();
        btn6.data = "Выбрано";
    }
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);