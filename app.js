let timerDisplay=document.querySelector('.timerDispaly');
let stopBtn=document.getElementById('stop');
let startBtn=document.getElementById("start");
let resetBtn=document.getElementById('reset');


let msec= 0 ;
let secs=0;
let mins=0;

let timerId;

startBtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
   timerId= setInterval(startTimer,10);
   console.log(timerId);

});

stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML=`00:00:00`;
});




//making function 
function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }


let msecString=msec<10 ?`0${msec}`:msec;
let secsString=secs<10 ?`0${secs}`:secs;
let minsString=mins<10 ?`0${mins}`:mins;


timerDisplay.innerHTML=`${minsString} :${secsString}:${msecString}`;


}
