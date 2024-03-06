"use strict";

const generateRandom = () =>{
    return Math.trunc(Math.random() * 20 + 1);
}
let secretValue = generateRandom();
let score = 20;
let highScore = 0;
$("document").ready(function () {
    $('.again').click(function(){
       
        secretValue = generateRandom();
        $('.secret-number').text('?');
        $("#number").val('');
        $(".message").text("Start guessing...")
        score = 20;
        $(".score .score .value").text("20");
        $('body').css('background-color', 'white'); 
    });




//events that are happen when check button clicked
document.querySelector('.check').addEventListener('click', (onclick)=>{
    console.log("onclick");
   const  inputValue = Number(document.querySelector('#number').value);
    console.log( inputValue);
    
    if(!inputValue){
        document.querySelector('.message').textContent = "🚫 No value found";
    }
    else if(inputValue === secretValue){
        document.querySelector('.message').textContent = "🏋️Wow you won it, Try your luck again";
       if(score>highScore){ 
        highScore = score;
    }
        document.querySelector('.high-score .value').textContent = highScore;
        document.querySelector('.secret-number').textContent = secretValue;
   
            $('body').css('background-color', 'green'); 
     
          setTimeout(function() {
            $('.high-score .value').css('font-size', '+=20'); 
        }, ); 
        setTimeout(function() {
            $('.high-score .value').css('font-size', '-=20'); 
        },500); 
    }
    else {
        if(score == 1 ){
            score--;
            document.querySelector('.score .value').textContent = score;
           
              $('body').css('background-color', 'red'); 
              document.querySelector('.message').textContent = "You lose the game, Try Again🏋️";
         
        }
       else if(score>= 1){ document.querySelector('.message').textContent = inputValue < secretValue?"📉 your guess is lesser than the Secret":"📈 your guess is greater than the Secret";
       
        score--;
        document.querySelector('.score .value').textContent = score;
          setTimeout(function() {
            $('body').css('background-color', 'red'); 
        }, ); 
        setTimeout(function() {
            $('body').css('background-color', 'white'); 
        },500); 
         setTimeout(function() {
            $('.score .value').css('font-size', '+=20'); 
        }, ); 
        setTimeout(function() {
            $('.score .value').css('font-size', '-=20'); 
        },500); }
    }
   
});
});