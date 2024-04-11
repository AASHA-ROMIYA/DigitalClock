const clock=document.querySelector(".clock");
function clocktime(){
var time=new Date(); 
var hrs = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();
var txt='AM';
if(hrs>12){
    hrs=hrs-12;
    txt='PM';
}
else if(hrs==0){
hrs=12;
txt='AM';
}
hrs=hrs<10?'0'+hrs:hrs;
minute=minute<10?'0'+minute:minute;
second=second<10?'0'+second:second;

clock.innerHTML=`${hrs} : ${minute} : ${second} : ${txt}`;
}
setInterval(clocktime,1000);