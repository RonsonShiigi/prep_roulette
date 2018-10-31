/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.
// var myTime = setInterval(hero,1000);


var what = document.getElementById('t')
function hero(){
    var coin = Math.floor(Math.random()*(36-0+1))+0;

     what.innerHTML = coin;
     if(coin % 2 === 0){
         what.style.backgroundColor = "black";
     }
     else if(coin % 2 === 1){
        what.style.backgroundColor = "red";
     }else if(coin === 0){
        what.style.backgroundColor = "green"; 
     }
   }





// var on = document.getElementById('on');
// on.addEventListener('click',hero);




// var off = document.getElementById('off');
// off.addEventListener('click',stopIt)
// function stopIt(){
//     if(myTime = setInterval(hero,1000)){
//     clearInterval(myTime);}
// }

// var what = document.getElementById('t');
// function color(){
//     if(coin % 2 === 0){
//         what.style.color = 'blue';
// }
// }
