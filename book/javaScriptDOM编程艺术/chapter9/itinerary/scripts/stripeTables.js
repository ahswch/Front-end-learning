function stripeTables(){
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd == true){
                addClass(rows[j],"odd");
                console.log(rows[j]);
                odd = false;
            }
            else{
                odd = true;
                console.log("none");
            }
        }
    }
}
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }
    else{
        newClassName = element.className +" "+ value;
        element.className = newClassName;
    }
}
addLoadEvent(stripeTables);