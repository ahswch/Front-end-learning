function showPic(whichpic){
    var sourse = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",sourse);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    console.log(body_element.childNodes.length);
    console.log(body_element.nodeType);
    console.log(description.nodeValue);
    console.log(description.childNodes[0].nodeValue);//等价于console.log(description.firstChild.nodeValue);
}
window.onload = countBodyChildren;