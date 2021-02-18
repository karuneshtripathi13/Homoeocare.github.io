function change(arg){
    let date=new Date();
    if(arg<10)
    return("0"+arg)
    else
    return(arg)
}
console.log("this is time");
let time=document.getElementById("time");
let date=new Date();
console.log(date)
setInterval(() => {
    if(date.getHours()<12)
    time.innerHTML="Time: &nbsp;&nbsp;"+change(date.getHours())+":"+change(date.getMinutes())+":"+change(date.getSeconds())+" AM"
    else if(date.getHours()==12)
    time.innerHTML="Time: &nbsp;&nbsp;"+change(date.getHours())+":"+change(date.getMinutes())+":"+change(date.getSeconds())+" PM"
    else
    time.innerHTML="Time: &nbsp;&nbsp;"+(change(date.getHours()-12))+":"+change(date.getMinutes())+":"+change(date.getSeconds())+" PM"
}, 1000);
var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
setInterval(() => {
    dt=document.getElementById("date")
    date=new Date()
    dt.innerHTML='Date: &nbsp;&nbsp;'+change(date.getDate())+"/"+change(date.getMonth()+1)+"/"+date.getFullYear()
    dy=document.getElementById("day")
    dy.innerHTML='Day:&nbsp;&nbsp;'+weekday[date.getDay(2)]
}, 1000);