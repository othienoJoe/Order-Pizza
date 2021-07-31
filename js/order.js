// Heading time interval
window.onload=function(){getTime();}  
function getTime(){  
  var today=new Date();  
  var h=today.getHours();  
  var m=today.getMinutes();  
  var s=today.getSeconds();
  function getDate(){
    var date=new Date();
    var day=date.getDate();  
    var month=date.getMonth()+1;  
    var year=date.getFullYear();  
document.write("<br>Date is: "+day+"/"+month+"/"+year); 
}
// add a zero in front of numbers<10  
m=checkTime(m);  
s=checkTime(s);  

document.getElementById('text').innerHTML=h+":"+m+":"+s;  
setTimeout(function(){getTime()},1000);  
} 

setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}
