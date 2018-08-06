function changeLink(){
    document.getElementById('myAnchor').innerHTML="访问w3school";
    document.getElementById('myAnchor').href="http://www.w3school.com.cn";
    document.getElementById('myAnchor').target="_blank";
}
function getfocus(){
    document.getElementById('myAnchor').focus();
}
function losefocus(){
    document.getElementById('myAnchor').blur();
}
function accesskey(){
    document.getElementById('w3').accessKey="w";
    document.getElementById('w3dom').accessKey="d";
}
accesskey();
document.write(document.title);
document.write("<br>");
document.write("该文档的URL：" + document.URL);
document.write("<br>");
document.write("referrer 属性返回加载本文档的文档的 URL。.本文档的 referrer 是：");
document.write(document.referrer);//如果当前文档不是通过超级链接访问的，则为 null。
document.write(document.domain);//该属性是一个只读的字符串，包含了载入当前文档的 web 服务器的主机名。
function getElements()
  {
  var x=document.getElementsByName("myInput");
  alert(x.length);
  console.log(x);
  }

  function createNewDoc()
  {
  var newDoc=document.open("text/html","replace");
  var txt="<html><body>学习 DOM 非常有趣！</body></html>";
  newDoc.write(txt);
  newDoc.close();
  }
  document.write("<br>");
  document.write("锚的个数："+document.anchors.length);
  console.log(document.anchors);
  document.write("<br>");
  document.write(document.anchors[0].innerHTML);
  console.log(document.anchors[0]);
  document.write("<br>");
  document.write("文档包含：" + document.forms.length + "个表单");
  console.log(document.forms);
  document.write("<p>第一个表单名称是：" + document.forms[0].name + "</p>");
  document.write("本文档包含：" + document.images.length + " 幅图像。");

  function whitchButton(event) { 
      var btnNum = event.button;
      console.log(btnNum);
      if(btnNum == 2){
          alert("您点击了鼠标右键！");
      }
      else if(btnNum==0)
        {
        alert("您点击了鼠标左键！")
        }
        else if(btnNum==1)
        {
        alert("您点击了鼠标中键！");
        }
        else
        {
        alert("您点击了" + btnNum+ "号键，我不能确定它的名称。");
        }
   }
function show_coords(event){
    x = event.clientX;
    y = event.clientY;
    console.log("X 坐标: " + x + ", Y 坐标: " + y);
}
function buttonUnicode(event){
    console.log(event.keyCode);
}
function coordinates(event){
    x = event.screenX;
    y = event.screenY;
    console.log("X=" + x + " Y=" + y);
}
function isKeyPressed_andwhichElement(event)
{
    if (event.shiftKey==1)
    {
    console.log("The shift key was pressed!");
    }
    else if(event.shiftKey!=1)
    {
    console.log("The shift key was NOT pressed!");
    }
    //以下不明
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
    targ = targ.parentNode;
    var tname;
    tname=targ.tagName;
    console.log("You clicked on a " + tname + " element.");
}
//下一内容 ：Form 和 Input 对象 