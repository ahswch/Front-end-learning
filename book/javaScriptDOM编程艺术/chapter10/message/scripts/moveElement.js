function moveElement(elementID,final_x,final_y,interval){
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    console.log(xpos + "," +ypos);
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
        xpos++;
    }
    if(xpos > final_x){
        xpos--;
    }
    if(ypos < final_y){
        ypos++;
    }
    if(ypos > final_y){
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    console.log(elementID);
    var repeat = "moveElement('"+ elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    console.log(repeat);
    movement = setTimeout(repeat,interval);
}
// addLoadEvent(moveMessage);