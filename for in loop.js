// for in loop

for(var num = 1; num <= 10; num++){
    document.write("Number " + num + "<br/>");
}


for(var i = 0; i < 10; i++){
    document.write(i + "<br/>")
}

document.write("<br/>");
var mamun = 5;
for(mamun; mamun <= 20; mamun++){
    document.write(mamun + "<br/>");
}

document.write("<br/>");
var result = 5;
for(result; result <= 25; result++){
    if(result % 2 == 1)
    continue;
    document.write("this is my result is " + result + "<br/>");
}

document.write("<br/>");
for(var i = 0; i <= 10; i++){
    document.write("<b> value of i </b>" + i + "<br/>")
}
document.write("<p/>");

var j = 10;
for(; j > 0; j--){
    document.write("<b> value of j </b>" + j + "<br/>");
}


document.write("<p/>");
k = 2;
for(; k <= 10; k += 1){
    if(k == 4){
    continue;
    }
    document.write("<b> value of k: </b>" + k + "<br/>")
}

document.write("<p/>");
var z = 1;
for(; z <= 15; z = z + 1){
    if(z == 8){
    break;
    }
    document.write("value break is here " + z + "<br/>");

}


document.write("<p/>");
for(a = 0; a <= 20; a++){
    document.write("<i> welcome </i>" + "<br/>");
}

document.write("<p/>");
for(var i = 0; i <= 10; i = i + 1){
    if(i == 3){
        continue;
    }
    document.write(i + "<br/>");
}

document.write("<h1>multiplication table</h1>");
document.write("<table border = 1 widht = 50% cellspacing = 5>");
for(i = 1; i <= 9; i++){
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    for(j = 2; j <= 9; j++){
        document.write("<td>" + i * j + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


document.write("<p/>");
document.write("<h2> try to make another table </h2>");
document.write("<table border = 1, widht = 60%, cellspacing = 5>");
for(i = 2; i <= 12; i++){
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    for(k = 4; k <= 12; k++){
        document.write("<td>" + i * k + "</td>");
        
    }
    document.write("</tr>");
}
document.write("</table>");



document.write("<p/>");
var xint = 0;
var xint_x = 5;
for(xint; xint <= xint_x; xint = xint + 1){
    if(xint == 2){
        continue;
    }
    document.write("the value of xint " + xint + "<br/>");
}

document.write("<p/>");
var xint = 1;
for(; ; ){
    if(xint >= 5){
        break;
    }
    document.write(xint + "<br/>");
    xint++;
}


document.write("<p/>");
for(i = 0; i < 30; i++){
    document.write("welcome" + "<br/>");
}

document.write("<p/>");
for(i = 0; i <= 10; i++){
    document.write("<b> the value of i :</b>" + i + "<br/>");
}

document.write("<p/>");
j = 10;
for(; j > 0; j--){
    document.write("<b> the value of j :" + j + "<br/>");
}

document.write("<p/>");
k = 2;
document.write("<p/>");
for(; k <= 10;){
    document.write("<b> the value of k :" + k +"<br/>");
    k += 2;
}

/*
var username = "admin"
do{
    var user = prompt("who are you");
    if(user == username){
        window.location = "java script/new one.html";
    }
}while(username == "admin");
*/