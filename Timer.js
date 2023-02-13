let timeInterval;
let sec= 0;
let min = 0;
let hora = 0; 

 function doisDigitos(digit){
    if (digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}
const button = document.querySelector("#start");button.addEventListener("click",function(){
    button.hidden= true; 
    bot.hidden = false;
    parar.hidden = false;

     timeInterval = setInterval(function(){
        
        if(sec < 60){
        sec++
          }else if(min < 60){
             sec = 0
             min++
             }else{
               sec=0
               min=0
               hora++
        }
        
        crn.innerHTML = doisDigitos(hora)+ ":" + doisDigitos(min) + ":"+ doisDigitos(sec)
         
    },1000)
    
    
});



const parar = document.querySelector("#stop");parar.addEventListener("click",function(){
    clearInterval(timeInterval);
    button.hidden = false;
    bot.hidden = false;
});
 



const bot = document.querySelector("#restart");bot.addEventListener("click",function(){
    bot.hidden = true;
    sec = 0
    min = 0
    crn.innerHTML = "00:00:00"


});
