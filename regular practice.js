document.write("<h3>practice session</h3>");
document.write("<h3>function</h3>");
document.write("<p/>");
//function statement.............
function name(){
    document.write("hi this is mamun");
}
name();


document.write("<p/>");
function all_name(name, nametwo, namethree){
    document.write("the first is " + name + "<br/>" + " second name is " + nametwo + "<br/>" + " third name is " + namethree);
}
all_name("mamun ", "hasan ", "rokib");

document.write("<p/>");
function viewResult(resultone, resulttwo, resultthree){
    document.write("mamun get " + resultone + "<br/>" + " resal get " + resulttwo + "<br/>" + "ruble get " + resultthree)
}
viewResult("A+", "A-", "B+");


document.write("<p/>");
var xiaomi = "number one";
function admiration(){
    document.write("you express the phone " + xiaomi)
}
admiration();

document.write("<p/>");
function doSomething(name, color){
    document.write("my name is " + name + "favourite color is " + color);
}
doSomething("mamun", "blue ");
document.write("<br/>");
doSomething("akbar")

document.write("<p/>");
function addTwonumber(name, numberone, numbertwo){
    var addition = numberone + numbertwo;
    document.write(name + " your addition value is = " + addition);
}
addTwonumber("mamun", 20, 20);
document.write("<br/>");
addTwonumber("sifat", 50, 20);
document.write("<br/>");
addTwonumber("saiful", 20, 40);

document.write("<p/>");
function multipall(one, two, three){
    var three_value = one * two * three;
    return three_value;
}
var result = multipall(4, 5, 2);
document.write("the multipall value is = " + result);


document.write("<p/>");

function divitionOut(one, two){
    var value = ("the output is = " + (one / two));
    return value;
}
var output = divitionOut(20, 4);
document.write(output + " thank you");


document.write("<p/>");
function familyName(name){
    document.write(name + " patoyary.<br/>");
}
document.write("my name is ")
familyName("mamun");
document.write("my father name is ");
familyName("monir hossain");


document.write("<p/>");
function qualification(name, pantutation){
    document.write(name + " hossain" + pantutation +"<br/>")
}
document.write("my name is ");
qualification("mamun", "."); 


document.write("<h3>if... else if... else... statement</h3>");
// if... else if ..... else statement;
var x = 12;
if(x < 15){
    document.write("<h5>the value is true so the if statement is print</h5>");
}
else{
    document.write("else statement executive");
}

document.write("<p/>");
var a = 40;
var b = 50;
if(a >= b){
    document.write("the if statement is true");
}
else{
    document.write("<h5>the else statement is true</h5>");
}

document.write("<p/>");
var x = 10;
var y = 12;
var c = x <= y && x !== y;
var d = x >= y && x === y;
if(c === d){
    document.write("<h5>the both value is true");
}else{
    document.write("<h5>the both is not true<h5>");
}



document.write("<p/>");
var asked = prompt("login first with your id");
if(asked == "s"){
    var marks = prompt("input your marks");
    if(marks > 100){
        document.write("that is not your number")
    }
    else if(marks >= 80 && marks <= 100){
        document.write("yout got A+");
    }
    else if(marks >= 70){
        document.write("you got A");
    }
    else if(marks >= 60){
        document.write("you got A-");
    }
    else if(marks >= 50){
        document.write("you got B");
    }
    else if(marks >= 40){
        document.write("you got B-");
    }
    else if(marks >= 33){
        document.write("you got C")
    }
    else if(marks >= 1){
        document.write("you have been failed");
    }
    else if(marks == null){
        document.write("cancled you");
    }
    else{
        document.write("error date");
    }
}

else if(asked == "t"){
    var name = prompt("input the subject name");
    if(name == "chemistry"){
        document.write("teacher name is MAMUN");
    }
    else if(name == "m"){
        document.write("the teacher name is ABDUALL");
    }
    else if(name == "s"){
        document.write("the teacher name is RAHMAN");
    }
    else if(name == "b"){
        document.write("the teacher name is LIPI SARKER ")
    }
    else if(name == null){
        document.write("no subject choice");
    }
    else{
        document.write("subject not match");
    }
}

else if(asked == null){
    document.write("thank you and see again");
}
else{
    document.write("login failed");
}


/*
var result = prompt("submit your marks");
if(result >= 80){
    document.write("you got A+");
}else if(result >= 70){
    document.write("you got A-");
}else if(result >= 60){
    document.write("you got A-");
}else if(result >= 50){
    document.write("you got B+");
}else if (result >= 40){
    document.write("you got B-");
}else if(result >= 33){
    document.write("you have been pass but this is one of the best poor number you are stupid");
}
else if(result == null){
    alert("cancled");
}else{
    alert("eror input");
}
*/



document.write("<p/>");
var admin = prompt("admin login");
if(admin == "m"){
    var pass = prompt("login with password");
    if(pass == 123){
        document.write("welcome boss " + admin);
    }else if(pass == null){
        document.write("you press cancle")
    }
    else{
        document.write("wrong password");
    }
}
else if(admin == null){
    document.write("you cancle");
}
else{
    document.write("<h4>wrong keyword</h4>");
}


document.write("<p/>");
document.write("<h3>switch statement</h3>");
var a = 4;
var b = 2;
switch(a){
    case 1: document.write("<h4>print the number 1</h4>"); break;
    case 2: document.write("<h4>print the number 2</h4>"); break;
    case 3: document.write("<h4>print the number 3</h4>"); break;
    case 4: document.write("<h4>print the number 4</h4>"); break;
    case 5: document.write("<h4>print the number 5</h4>"); break;
    default: document.write("showing the default value or not match"); break;
}


document.write("<p/>");
var day = new Date();
var to_day = day.getDay();
switch(to_day){
    case 0: document.write("today is sunday"); break;
    case 1: document.write("today is monday"); break;
    case 2: document.write("today is tuesday"); break;
    case 3: document.write("today is wednesday"); break;
    case 4: document.write("today is thusday"); break;
    case 5: document.write("today is friday"); break;
    case 6: document.write("today is saturday"); break;
    default: document.write("today date is not matched"); break;
}


document.write("<p/>");
var date = new Date();
var today_date = date.getDate();
switch(today_date){
    case 1: document.write("date of today is = 1"); break;
    case 2: document.write("date of today is = 2"); break;
    case 3: document.write("date of today is = 3"); break;
    case 4: document.write("date of today is = 4"); break;
    case 5: document.write("date of today is = 5"); break;
    case 6: document.write("date of today is = 6"); break;
    case 7: document.write("date of today is = 7"); break;
    case 8: document.write("date of today is = 8"); break;
    case 9: document.write("date of today is = 9"); break;
    case 10: document.write("date of today is = 10"); break;
    case 11: document.write("date of today is = 11"); break;
    case 12: document.write("date of today is = 12"); break;
    case 13: document.write("date of today is = 13"); break;
    case 14: document.write("date of today is = 14"); break;
    case 15: document.write("date of today is = 15"); break;
    case 16: document.write("date of today is = 16"); break;
    case 17: document.write("date of today is = 17"); break;
    case 18: document.write("date of today is = 18"); break;
    case 19: document.write("date of today is = 19"); break;
    case 20: document.write("date of today is = 20"); break;
    case 21: document.write("date of today is = 21"); break;
    case 22: document.write("date of today is = 22"); break;
    case 23: document.write("date of today is = 23"); break;
    case 24: document.write("date of today is = 24"); break;
    case 25: document.write("date of today is = 25"); break;
    case 26: document.write("date of today is = 26"); break;
    case 27: document.write("date of today is = 27"); break;
    case 28: document.write("date of today is = 28"); break;
    case 29: document.write("date of today is = 29"); break;
    case 30: document.write("date of today is = 30"); break;
    case 31: document.write("date of today is = 31"); break;
    default: document.write("not matching any date"); break;
}


document.write("<p/>")
var time = new Date();
var just_time = time.getHours();
switch(just_time){
    case 1: document.write("now 1 o'clock"); break;
    case 2: document.write("now 2 o'clock"); break;
    case 3: document.write("now 3 o'clock"); break;
    case 4: document.write("now 4 o'clock"); break;
    case 5: document.write("now 5 o'clock"); break;
    case 6: document.write("now 6 o'clock"); break;
    case 7: document.write("now 7 o'clock"); break;
    case 8: document.write("now 8 o'clock"); break;
    case 9: document.write("now 9 o'clock"); break;
    case 10: document.write("now 10 o'clock"); break;
    case 11: document.write("now 11 o'clock"); break;
    case 12: document.write("now 12 o'clock"); break;
    case 13: document.write("now 13 o'clock"); break;
    case 14: document.write("now 14 o'clock"); break;
    case 15: document.write("now 15 o'clock"); break;
    case 16: document.write("now 16 o'clock"); break;
    case 17: document.write("now 17 o'clock"); break;
    case 18: document.write("now 18 o'clock"); break;
    case 19: document.write("now 19 o'clock"); break;
    case 20: document.write("now 20 o'clock"); break;
    case 21: document.write("now 21 o'clock"); break;
    case 22: document.write("now 22 o'clock"); break;
    case 23: document.write("now 23 o'clock"); break;
    case 24: document.write("now 24 o'clock"); break;
    default: document.write("not matching any time"); break;
}


document.write("<p/>");
var day = new Date();
var toDay = day.getDay();
switch(toDay){
    case 0: document.write("today is sunday ooho its working day"); break;
    case 1: document.write("today is monday ooho its working day"); break;
    case 2: document.write("today is tuesday ooho its working day"); break;
    case 3: document.write("today is wednesday ooho its working day"); break;
    case 4: document.write("today is thusday ooho its working day"); break;
    case 5: document.write("today is friday hurray its holiday"); break;
    case 6: document.write("today is saturday"); break;
    default: document.write("nothing matching hurray its holiday"); break;
}

document.write("<p/>");
var date = new Date(2019, 10, 24, 23, 23);
document.write(date);
/*
document.write("<p/>");
var minute = new Date();
var justMinute = minute.getMinutes();
switch(justMinute){
    case 1: document.write("now minute is 1"); break;
    case 2: document.write("now minute is 2"); break;
    case 3: document.write("now minute is 3"); break;
    case 4: document.write("now minute is 4"); break;
    case 5: document.write("now minute is 5"); break;
    case 6: document.write("now minute is 6"); break;
    case 7: document.write("now minute is 7"); break;
    case 8: document.write("now minute is 8"); break;
    case 8: document.write("now minute is 9"); break;
    case 10: document.write("now minute is 10"); break;
    case 11: document.write("now minute is 11"); break;
    case 12: document.write("now minute is 12"); break;
    case 13: document.write("now minute is 13"); break;
    case 14: document.write("now minute is 14"); break;
    case 15: document.write("now minute is 15"); break;
    case 16: document.write("now minute is 16"); break;
    case 17: document.write("now minute is 17"); break;
    case 18: document.write("now minute is 18"); break;
    case 19: document.write("now minute is 19"); break;
    case 20: document.write("now minute is 20"); break;
    case 21: document.write("now minute is 21"); break;
    case 22: document.write("now minute is 22"); break;
    case 23: document.write("now minute is 23"); break;
    case 24: document.write("now minute is 24"); break;
    case 25: document.write("now minute is 25"); break;
    case 26: document.write("now minute is 26"); break;
    case 27: document.write("now minute is 27"); break;
    case 28: document.write("now minute is 28"); break;
    case 29: document.write("now minute is 29"); break;
    case 30: document.write("now minute is 30"); break;
    case 31: document.write("now minute is 31"); break;
    case 32: document.write("now minute is 32"); break;
    case 33: document.write("now minute is 33"); break;
    case 34: document.write("now minute is 34"); break;
    case 35: document.write("now minute is 35"); break;
    case 36: document.write("now minute is 36"); break;
    case 37: document.write("now minute is 37"); break;
    case 38: document.write("now minute is 38"); break;
    case 39: document.write("now minute is 39"); break;
    case 40: document.write("now minute is 40"); break;
    case 41: document.write("now minute is 41"); break;
    case 42: document.write("now minute is 42"); break;
    case 43: document.write("now minute is 43"); break;
    case 44: document.write("now minute is 44"); break;
    case 45: document.write("now minute is 45"); break;
    case 46: document.write("now minute is 46"); break;
    case 47: document.write("now minute is 47"); break;
    case 48: document.write("now minute is 48"); break;
    case 49: document.write("now minute is 49"); break;
    case 50: document.write("now minute is 50"); break;
    case 51: document.write("now minute is 51"); break;
    case 52: document.write("now minute is 52"); break;
    case 53: document.write("now minute is 53"); break;
    case 54: document.write("now minute is 54"); break;
    case 55: document.write("now minute is 55"); break;
    case 56: document.write("now minute is 56"); break;
    case 57: document.write("now minute is 57"); break;
    case 58: document.write("now minute is 58"); break;
    case 59: document.write("now minute is 59"); break;
    case 60: document.write("now minute is 60"); break;

}
*/

document.write("<p/>");
var day = new Date();
var todayDay = day.getDay();
switch(todayDay){
    case 0: document.write("today is sunday"); break;
    case 1: document.write("today is monday"); break;
    case 2: document.write("today is tuesday"); break;
    case 3: document.write("today is wednesday"); break;
    case 4: document.write("today is thusday"); break;
    case 5: document.write("today is friday"); break;
    case 6: document.write("today is saturday"); break;
    default: document.write("not matchig any date"); break;
}

document.write("<p/>");
document.write("<h3> while... do while... for in loop...</h3>");
var x = 1;
while(x < 20){
    document.write("the value of x =" + x + "<br/>");
    x++;
}

document.write("<p/>");
var t = 5;
while(t <= 20){
    document.write("the value of t = " + t + "<br/>");
    t = t + 5;
}

document.write("<p/>");
var count = 15;
while(count >= 0){
    document.write("the count value is" + count + "<br/>");
    count = count - 2;
}

document.write("<p/>");
var total = 1;
while(total <= 10){
    document.write(total + '_' + (total * 10) + "<br/>");
    total++;
}

document.write("<p/>");
