function myFunction(){
    var day = new Date().getDay();
    if(day === 4){
     document.getElementById("message").style.display = "block";
    }else{
       document.getElementById("message").style.display = "none";
      }
       };

myFunction()



function days(){
var day = new Date().getDay();
var s = document.getElementsByClassName("label");
if(day ===4){
s[1].innerHTML = "Sunday";
s[2].innerHTML = "Monday";
s[3].innerHTML = "Tuesday";
s[4].innerHTML = "Wednesday";
s[5].innerHTML = "Thursday";

}else if(day===1){
s[1].innerHTML = "Monday";
s[2].innerHTML = "Tuesday";
s[3].innerHTML = "Wednesday";
s[4].innerHTML = "Thursday";
s[5].innerHTML = "Friday";

}else if(day===2){
    s[1].innerHTML = "Tuesday";
s[2].innerHTML = "Wednesday";
s[3].innerHTML = "Thursday";
s[4].innerHTML = "Friday";
s[5].innerHTML = "Saturday";

}
else if(day===3){
    s[1].innerHTML = "Wednesday";
s[2].innerHTML = "Thursday";
s[3].innerHTML = "Friday";
s[4].innerHTML = "Saturday";
s[5].innerHTML = "Sunday";

}
else if(day===4){
    s[1].innerHTML = "Thursday";
s[2].innerHTML = "Friday";
s[3].innerHTML = "Saturday";
s[4].innerHTML = "Sunday";
s[5].innerHTML = "Monday";

}
else if(day===5){
    s[1].innerHTML = "Friday";
    s[2].innerHTML = "Saturday";
    s[3].innerHTML = "Sunday";
    s[4].innerHTML = "Monday";
    s[5].innerHTML = "Tuesday";
    
}
else{
    s[1].innerHTML = "Saturday";
    s[2].innerHTML = "Sunday";
    s[3].innerHTML = "Monday";
    s[4].innerHTML = "Tuesday";
    s[5].innerHTML = "Wednesday";

}

}
days();

