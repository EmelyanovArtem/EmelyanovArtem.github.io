"use strict"

let type = prompt("Какой хотите тип сайта? 1-визитка(1000руб) 2-корпоративный(2500руб) 3-интернет-магазин (6000руб)");
let style = prompt("Какой хотите дизайн сайта? 1-классика(1500руб) 2-ретро(1200руб) 3-типографика (2500руб)");
let adaptivity = prompt("Какую желаете адаптацию сайта? 1-строго пиксельная(1000руб) 2-под все устройства(2500руб) 3-под мобильные устройства (1500руб)");
let finishCash;
let finishDate;

let calculate={
    
    cash:[
        [1000, 2500, 6000],
        [1500, 1200, 2500],
        [1000, 2500, 1500],
    ],
    date: [
        [2, 4, 7],
        [4, 3, 5],
        [2, 4, 3],  
    ]
    
};
/*-------------------------------------------------*/
if( type == 1 && style == 1 && adaptivity == 1){
    finishCash = calculate.cash[0][0] + calculate.cash[1][0] + calculate.cash[2][0];
    finishDate = calculate.date[0][0] + calculate.date[1][0] + calculate.date[2][0];
}
if( type == 1 && style == 2 && adaptivity == 1){
    finishCash = calculate.cash[0][0] + calculate.cash[1][1] + calculate.cash[2][0];
    finishDate = calculate.date[0][0] + calculate.date[1][1] + calculate.date[2][0];
}
if( type == 1 && style == 3 && adaptivity == 1){
    finishCash = calculate.cash[0][0] + calculate.cash[1][2] + calculate.cash[2][0];
    finishDate = calculate.date[0][0] + calculate.date[1][2] + calculate.date[2][0];
}
/*-------------------------------------------------*/
if( type == 2 && style == 1 && adaptivity == 1){
    finishCash = calculate.cash[0][1] + calculate.cash[1][0] + calculate.cash[2][0];
    finishDate = calculate.date[0][1] + calculate.date[1][0] + calculate.date[2][0];
}
if( type == 3 && style == 1 && adaptivity == 1){
    finishCash = calculate.cash[0][2] + calculate.cash[1][2] + calculate.cash[2][0];
    finishDate = calculate.date[0][2] + calculate.date[1][0] + calculate.date[2][0];
}
/*-------------------------------------------------*/
if( type == 1 && style == 1 && adaptivity == 2){
    finishCash = calculate.cash[0][0] + calculate.cash[1][0] + calculate.cash[2][1];
    finishDate = calculate.date[0][0] + calculate.date[1][0] + calculate.date[2][1];
}
if( type == 1 && style == 1 && adaptivity == 3){
    finishCash = calculate.cash[0][0] + calculate.cash[1][2] + calculate.cash[2][2];
    finishDate = calculate.date[0][0] + calculate.date[1][2] + calculate.date[2][2];
}
/*-------------------------------------------------*/
if( type == 2 && style == 2 && adaptivity == 2){
    finishCash = calculate.cash[0][1] + calculate.cash[1][1] + calculate.cash[2][1];
    finishDate = calculate.date[0][1] + calculate.date[1][1] + calculate.date[2][1];
}
if( type == 3 && style == 3 && adaptivity == 3){
    finishCash = calculate.cash[0][2] + calculate.cash[1][2] + calculate.cash[2][2];
    finishDate = calculate.date[0][2] + calculate.date[1][2] + calculate.date[2][2];
}
/*-------------------------------------------------*/
if( type == 2 && style == 1 && adaptivity == 2){
    finishCash = calculate.cash[0][1] + calculate.cash[1][0] + calculate.cash[2][1];
    finishDate = calculate.date[0][1] + calculate.date[1][0] + calculate.date[2][1];
}
if( type == 3 && style == 1 && adaptivity == 3){
    finishCash = calculate.cash[0][2] + calculate.cash[1][0] + calculate.cash[2][2];
    finishDate = calculate.date[0][2] + calculate.date[1][0] + calculate.date[2][2];
}
/*-------------------------------------------------*/
if( type == 2 && style == 2 && adaptivity == 1){
    finishCash = calculate.cash[0][1] + calculate.cash[1][1] + calculate.cash[2][0];
    finishDate = calculate.date[0][1] + calculate.date[1][1] + calculate.date[2][0];
}
if( type == 3 && style == 3 && adaptivity == 1){
    finishCash = calculate.cash[0][2] + calculate.cash[1][2] + calculate.cash[2][0];
    finishDate = calculate.date[0][2] + calculate.date[1][2] + calculate.date[2][0];
}
/*-------------------------------------------------*/
if( type == 1 && style == 2 && adaptivity == 3){
    finishCash = calculate.cash[0][0] + calculate.cash[1][1] + calculate.cash[2][2];
    finishDate = calculate.date[0][0] + calculate.date[1][1] + calculate.date[2][2];
}
if( type == 3 && style == 2 && adaptivity == 1){
    finishCash = calculate.cash[0][2] + calculate.cash[1][1] + calculate.cash[2][0];
    finishDate = calculate.date[0][2] + calculate.date[1][1] + calculate.date[2][0];
}
/*-------------------------------------------------*/
if( type == 1 && style == 3 && adaptivity == 2){
    finishCash = calculate.cash[0][0] + calculate.cash[1][2] + calculate.cash[2][1];
    finishDate = calculate.date[0][0] + calculate.date[1][2] + calculate.date[2][1];
}
if( type == 3 && style == 1 && adaptivity == 2){
    finishCash = calculate.cash[0][2] + calculate.cash[1][0] + calculate.cash[2][1];
    finishDate = calculate.date[0][2] + calculate.date[1][0] + calculate.date[2][1];
}
/*-------------------------------------------------*/
if( type == 2 && style == 3 && adaptivity == 1){
    finishCash = calculate.cash[0][1] + calculate.cash[1][2] + calculate.cash[2][0];
    finishDate = calculate.date[0][1] + calculate.date[1][2] + calculate.date[2][0];
}
if( type == 2 && style == 1 && adaptivity == 3){
    finishCash = calculate.cash[0][1] + calculate.cash[1][0] + calculate.cash[2][2];
    finishDate = calculate.date[0][1] + calculate.date[1][0] + calculate.date[2][2];
}

alert("Стоимость " + finishCash + " рублей, сроки " + finishDate + " дней");