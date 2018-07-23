document.write("Hello World!");
document.write("<h1>Hello World!</h1>");

function message() {
  // alert("该提示框是通过onload事件调用的。");
  // alert("再次向您问好！在这里，我们向您演示" + '\n' + "如何向警告框添加折行。");
}
document.write("该消息在页面加载时输出。");
var firstname;
firstname = "George";
document.write(firstname);
document.write("<br>");
firstname = "John";
document.write(firstname);

function show_confirm() {
  var r = confirm("Press a button!");
  if (r == true) {
    alert("You ress OK!");
  } else {
    alert("You press Cansel!");
  }
}

function disp_prompt() {
  var name = prompt("请输入您的名字", "Bill Gates");
  if (name != null && name != "") {
    document.write("你好！" + name + "今天过得怎么样？")
  }
}

for (var i = 1; i <= 6; i++) {
  document.write("<h" + i + ">这是标题" + i + "</h>");
}
var txt = "";

function tryc() {
  try {
    adddlert("Welcome guest!");
  } catch (e) {
    txt = "本页存在错误。\n\n" + "错误描述：" + e.description + "\n\n" + "点击‘确定’继续。\n\n";
    alert(txt);
  }
}

function confirmtry() {
  try {
    adddlert("test");
  } catch (e) {
    txt = "本页中存在错误。\n\n" + "点击‘确定’继续查看本页。\n" + "点击‘取消’返回首页。\n\n";
    if (!confirm(txt)) {
      document.location.href = "index.html";
    }
  }
}

onerror = handleErr;

function handleErr(msg, url, l) {
  txt = "本页中存在错误。\n\n" + "错误：" + msg + "\n" + "URL:" + url + "\n" + "行：" + l + "\n\n" + "点击‘确定’继续。\n\n";
  alert(txt);
  return true;
}

function onerrMes() {
  adddlert("test");
}

var browser = navigator.appName;
var b_version = navigator.appVersion;
var version = parseFloat(b_version);
document.write("浏览器名称：" + browser);
document.write("<br>" + "浏览器版本：" + version);

function timedMsg() {
  var t = setTimeout(function() {
    alert('2秒！');
  }, 2000);
}

var c = 0;
var t;

function timedCount() {
  document.getElementById('txt').value = c;
  c += 1;
  t = setTimeout(function() {
    timedCount();
  }, 1000);
}

function stop(){
  c=0;
  clearTimeout(t);
}
function startTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function(){
    startTime();
  },500);
}
function checkTime(i){
  if(i<10){
    i="0"+i;
  }
  return i;
}
/**
 * 创建对象实例
 */
personObj=new Object();
personObj.firstname="John";
personObj.lastname="Adams";
personObj.age=35;
personObj.eyecolor="black";
document.write("<br>"+personObj.firstname+"的年龄是"+ personObj.age+"岁。");
