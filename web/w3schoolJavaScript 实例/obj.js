var txt = "Hello World!";
var str;
str =txt;
document.write(txt.length);
document.write(txt.big());
document.write(txt.small());
document.write("<br>");
document.write(txt.bold());
document.write(txt.italics());
document.write("<br>");
document.write(txt.blink());
document.write(txt.fixed());
document.write(txt.strike());
document.write("<br>");
document.write(txt.fontcolor("red"));
document.write(txt.fontsize(16));
document.write("<br>");
document.write(txt.toLocaleLowerCase());
document.write(txt.toLocaleUpperCase());
document.write("<br>");
document.write(txt.sub());
document.write(txt);
document.write(txt.sup());
document.write("<br>");
document.write(txt.indexOf("Hello"));
document.write(txt.indexOf("e"));
document.write(str.match("world") + "<br />")
document.write(str.match("World") + "<br />")
document.write(str.match("worlld") + "<br />")
document.write(str.match("world!"))
str="Visit Microsoft!"
document.write(str.replace(/Microsoft/,"W3School"))
document.write("<br>");
document.write(Date());
var d = new Date();
document.write("从 1970/01/01 至今已有：" + d.getTime() + "毫秒。");
var minutes=1000*60;
var hours=minutes*60;
var days=hours*24;
var years=days*365;
var d=new Date();
var y=Math.round(d/years); 
document.write("距今：" + y + "年");
document.write("<br>");
d.setFullYear(1992,10,3);
document.write(d);
d= new Date();
document.write("<br>");
document.write(d.toUTCString());
document.write("<br>");
var weekday=new Array(7);
weekday[0]="星期日";
weekday[1]="星期一";
weekday[2]="星期二";
weekday[3]="星期三";
weekday[4]="星期四";
weekday[5]="星期五";
weekday[6]="星期六";
document.write("今天是" + weekday[d.getDay()]);
document.write("<br>");
function startTime(){
    var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m=check(m);
s=check(s);
document.getElementById("Timer").innerHTML = h+":"+ m +":" +s;
t = setTimeout('startTime()',500);

}
function check(n){
    if(n<10){
        n="0"+n;
    }
    return n;
}
startTime();
var b1=new Boolean( 0)
var b2=new Boolean(1)
var b3=new Boolean("")
var b4=new Boolean(null)
var b5=new Boolean(NaN)
var b6=new Boolean("false")

document.write("0 是逻辑的 "+ b1 +"<br />")
document.write("1 是逻辑的 "+ b2 +"<br />")
document.write("空字符串是逻辑的 "+ b3 + "<br />")
document.write("null 是逻辑的 "+ b4+ "<br />")
document.write("NaN 是逻辑的 "+ b5 +"<br />")
document.write("字符串 'false' 是逻辑的 "+ b6 +"<br />")