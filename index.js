"strict.use";

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
    });





document.querySelector('.check').addEventListener('click', (onclick)=>{
    console.log("onclick");
   const  inputValue = Number(document.querySelector('#number').value);
    console.log( inputValue);

    if(!inputValue){
        document.querySelector('.message').textContent = "🚫 No value found";
    }
    else if(inputValue === secretValue){
        document.querySelector('.message').textContent = "🏋️Wow you found it";
        highScore = score;
        document.querySelector('.high-score .value').textContent = highScore;
        document.querySelector('.secret-number').textContent = secretValue;
          setTimeout(function() {
            $('body').css('background-color', 'green'); 
        }, ); 
        setTimeout(function() {
            $('body').css('background-color', 'white'); 
        },500); 
          setTimeout(function() {
            $('.high-score .value').css('font-size', '+=20'); 
        }, ); 
        setTimeout(function() {
            $('.high-score .value').css('font-size', '-=20'); 
        },500); 
    }
    else if(inputValue < secretValue){
        document.querySelector('.message').textContent = "📉 your guess is lesser than the Secret";
       
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
        },500); 
    }
    else {
        document.querySelector('.message').textContent = "📈 your guess is greater than the Secret";
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
        },500); 
    }
});
});