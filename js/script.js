"use strict";
//let number = 5;
//const LeftBorderWidth = 1;

//number = 10;
//console.log(number);



//{
   //  let result = 50;
//}



//let nUmber = 4.6;
 //const persone = 'Alex';

 //const bool = false;

 //let people;
 //console.log(people);




 //let arrg = ['plum.png', 'orange.jpg', 'car.jpg', {}];
 //console.log(arrg[1]);

 //const arrObj = {
    //a: 'a',
  //'1': 'b',
    //2: 'c',
    //abc: {
        //def:{

        //}
    //}
     //};
 
 //const obj = {
     //'Anna': 500,
     //'Alice': 800,
 //};
 //const arr = ['a', 'b', 'c'];

//arr[10] = '3456';

//console.log(arr);

 //arrObj.b = '1234';

 //console.log(arrObj.b);

//alert('hello!');
 
//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Вам есть 18?", "18");
//console.log(answer+ 5);
//console.log(typeof (answer));


//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваше фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//console.log(typeof(answers));

//const category = 'toys';
//console.log (`https://someurl.com/${category}/6`);

//const user = "Ivan";
//alert(`Привет,${user}`);

//console.log('arr' + "-object");

//console.log (4 + "-object");

//console.log (4 + +"5");

//let incr = 10,
    //decr = 10;

    //incr ++;
    //decr --;

//console.log(incr++);
//console.log(decr--);

//console.log(5%2);

//console.log (2+2*4 === 8);

//const isCheked = true;
       //isClose = false;

//console.log (isCheked && isClose);

//const isCheked = true;
       //isClose = false;

//console.log (isCheked || !isClose);


const number0films = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count:number0films,
    movies: {},
    actors: '',
 genres: [],
 private: false,
};

//const  a = prompt('Один из последних просмотренных фильмов?', ''),
       //b = prompt('На сколько оцените его?', ''),
       //c = prompt('Один из последних просмотренных фильмов?', ''),
       //d = prompt('На сколько оцените его?', '');

//personalMovieDB.movies [a] = b;
//personalMovieDB.movies [c] = d;

//console.log(personalMovieDB);

for (let i = 0; i < 2; i++ ){
    const  a = prompt('Один из последних просмотренных фильмов?', ''),
           b = prompt('На сколько оцените его?', '');
           personalMovieDB.movies [a] = b;
           
if(a != null && b != null && a != '' && b !='' && a.length <= 50){
    personalMovieDB.movies [a] = b;
} else{
console.log('Ответьте заново');
i--;
} if (personalMovieDB.count < 10){
 console.log ('Просмотрено довольно мало фильмов');
} else if(10 <= personalMovieDB.count >= 30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30){
console.log('Вы киноман');
}




console.log(personalMovieDB.movies);
}






 
console.log(personalMovieDB);

//if ( 4 == 9) {
    //console.log ('ok!');
//} else {
    //console.log ('error');
//}



//if (num < 49){
    //console.log('error');
//} else if(num> 100){
    //console.log('Много');
  
//} else {
    //console.log('ok!');
//}

//(num === 50) ? console.log('ok!') : console.log('error');

//const num = 50;

//switch(num) {
//case 49:
     //console.log('Неверно');
     //break;
     //case 100:
        //console.log('Неверно');
        //break;
//case 50:
    //console.log('ok');
//break;
//default:
    //console.log('Не в этот раз');
    //break;
//}

//const hamBurger = 5;
//const fries = 0;

//if (hamBurger && fries) {
    //console.log('Я сыт!');
//}

//const hamBurger = 3;
//const fries = 3;
//const cola = 0;
//const nuggets = 2;


//if (hamBurger === 3 && cola === 2 || fries === 3 && nuggets) {
    //console.log('Все довольны!');
//} else {
    //console.log('Уходим!');
//}

//console.log(hamBurger === 3 && cola === 2 || fries === 3 && nuggets);


//console.log(!0);
//let JohnReport, alexReport, samReport, mariaReport = 'done';
//console.log(hamBurger === 3 && cola === 2 || fries === 3 && nuggets);
//console.log(1 && 0);
//console.log(1 && 5);
//console.log(null && 5);
//console.log(0 && 'gjkfklgmlrg');

//console.log((hamBurger === 3 && cola && fries ));

//const fri = 1;
//const iqos = 1;
//const water = 4;


//console.log( NaN && 2 && undefined );


 
//console.log( !1 && 2 || !3 );

//console.log( 25 || null && !3 );

//console.log( NaN || null || !3 || undefined || 5);

 
//console.log( NaN || null && !3 && undefined || 5);

//console.log( 5 === 5 && 3 > 1 || 5);


//const hamburger = 3;
//const fries = 1;
//const cola = 0;
//const nuggets = 2;
 
//if (hamburger === 3 && cola || fries === 3 && nuggets) {
   //console.log('Done!');
//}


//let hamburger;
//const fries = NaN;
//const cola = 0;
//const nuggets = 2;
 
//if (hamburger || cola || fries === 3 || nuggets) {
   //console.log((hamburger || cola || fries === 3 || nuggets));
//}


//let hamburger;
//const fries = NaN;
//const cola = 0;
//const nuggets = 2;
 
//if (hamburger && cola || fries === 3 && nuggets) {
   //console.log('Done!');
//}

//let num = 50;
 
//while (num <= 55) {
    //console.log(num);
    //num++;
//}

//do{
    //console.log(num);
    //num++; 
//}
//while (num < 55);

//for (let i = 1; i < 10; i++){
    //if ( i === 6) {
        //break;
        //continue;
    //}
    
    //console.log(i);
//}

 //first: for ( let i = 0; i < 3; i++){
    //console.log(`first level: ${i}`);
    //for ( let j = 0; j < 3; j++){
        //console.log(`Second level: ${j}`);
    //}
    //for ( let k = 0; k < 3; k++){
       // if (k === 2) continue first;
        //console.log(`Third level: ${k}`);
    //}
//}

//let result = '';
//const lenght = 7;
//for (let i = 1; i < lenght; i++){
//for (let j = 0; j < i; j++){
//result += "*";
//}

    //result += '\n';
//}





//function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    //const data = [5, 10, 'Shopping', 20, 'Homework'];
//for(let i = 5; i < data.length;  i++){
    //if(typeof(data[i])`number:${i}`){
       //data[i] = data[i] * 2;
    //}
       //for(let j = 5; j < data.length;  j++){
     
     //if(typeof(data[j])`string:${j}`){
    //data[j] = ('- done');
    //console.log(data[j]);
     //} 
//}
    //}
    //return data;
    
//}  

//secondTask();




//const lines = 5;
//let result = '';
//for(let i = 1; i < lines; i++){
    //for (let j = 2; j < lines; j++ ){
        //result += "*";
    //}
//} console.log(result);



//