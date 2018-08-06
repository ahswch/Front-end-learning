function addLoadEvent(func){
    var oldonload = window.onload;//把现有的windows.onload事件处理函数的值存入变量oldonload
    if(typeof window.onload != "function"){//如果在这个处理函数上还没有绑定任何函数，把新函数添加给它
        window.onload = func;
    }
    else{//如果在这个处理函数上已经绑定了一些函数，把新函数追加到现有指令的末尾
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery(){
    if(!document.getElementsByTagName) {
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        links[i].onclick = function(){
            // showPic(this);
            return !showPic(this);
        }
    }
}

function showPic(whichpic){
    if(!document.getElementById("placeholder")){
        return false;
    }
    var sourse = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",sourse);

    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title");
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;
    
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

// function countBodyChildren(){
//     var body_element = document.getElementsByTagName("body")[0];
//     console.log(body_element.childNodes.length);
//     console.log(body_element.nodeType);
//     console.log(description.nodeValue);
//     console.log(description.childNodes[0].nodeValue);//等价于console.log(description.firstChild.nodeValue);
// }
// addLoadEvent(countBodyChildren);

