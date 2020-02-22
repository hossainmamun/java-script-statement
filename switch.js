var i = "bar"
switch(i){
    case "apple":
        document.write("i is apple");
        break;
    case "bar":
        document.write("i is bar");
        break;
    case "juce":
        document.write("i is juce");
        break;
    case "cake":
        document.write("i is cake");
        break;
}

document.write("<p/>");

var x = 1;
switch(x){
    case 1: document.write("x value is one"); break;
    case 2: document.write("x value is two"); break;
    case 3: document.write("x value is three"); break;
    case 4: document.write("x value is four"); break;
    default: document.write("nothing matched");
}


document.write("<p/>");
var value = 12;
switch(value){
    case 0: document.write("value one"); break;
    case 5: document.write("value is five"); break;
    case 8: document.write("vallue is eight"); break;
    case 11: document.write("value is eleven"); break;
    default: document.write("value is not matching"); break;
}

document.write("<p/>");
var day = new Date();
var today_day = day.getDay();
switch(today_day){
    case 0: document.write("today is sunday"); break;
    case 1: document.write("today is monday"); break;
    case 2: document.write("today is tuesday"); break;
    case 3: document.write("today is wednesday"); break;
    case 4: document.write("today is thursday"); break;
    case 5: document.write("today is friday"); break;
    case 6: document.write("today is saturday");
    default: document.write("nothing matched"); break;
}

document.write("<p/>");
var animal = "i have a tiger";
switch(animal){
    case "i have a tiger": document.write("ha ha " + animal); break;
    case "i have a dog": document.write("ha ha ha i have a dog"); break;
    default: document.write("nothing found"); break;
}


document.write("<p/>");
var x = 12;
switch(x){
    default: document.write("default value"); break;
    case 4: document.write("value is four"); break;
    case 8: document.write("value is eight"); break;
}


document.write("<p/>");
var date = new Date();
var today_date = date.getDate();
switch(today_date){
    case 1: document.write("the date of today is 1"); break;
    case 2: document.write("the date of today is 2"); break;
    case 3: document.write("the date of today is 3"); break;
    case 4: document.write("the date of today is 4"); break;
    case 5: document.write("the date of today is 5"); break;
    case 6: document.write("the date of today is 6"); break;
    case 7: document.write("the date of today is 7"); break;
    case 8: document.write("the date of today is 8"); break;
    case 9: document.write("the date of today is 9"); break;
    case 10: document.write("the date of today is 10"); break;
    case 11: document.write("the date of today is 11"); break;
    case 12: document.write("the date of today is 12"); break;
    case 13: document.write("the date of today is 13"); break;
    case 14: document.write("the date of today is 14"); break;
    case 15: document.write("the date of today is 15"); break;
    case 16: document.write("the date of today is 16"); break;
    case 17: document.write("the date of today is 17"); break;
    case 18: document.write("the date of today is 18"); break;
    case 19: document.write("the date of today is 19"); break;
    case 20: document.write("the date of today is 20"); break;
    case 21: document.write("the date of today is 21"); break;
    case 22: document.write("the date of today is 22"); break;
    case 23: document.write("the date of today is 23"); break;
    case 24: document.write("the date of today is 24"); break;
    case 25: document.write("the date of today is 25"); break;
    case 26: document.write("the date of today is 26"); break;
    case 27: document.write("the date of today is 27"); break;
    case 28: document.write("the date of today is 28"); break;
    case 29: document.write("the date of today is 29"); break;
    case 30: document.write("the date of today is 30"); break;
    case 31: document.write("the date of today is 31"); break;
    default: document.write("nothing matched"); break;
}

document.write("<p/>");
var meal = "burger";
switch(meal){
    case "rice": document.write("order rice with chicken curry"); break;
    case "chicken": document.write("order chicken fry with chili sos"); break;
    case "burger": document.write("order naga burger with cold drinks"); break;
    default: document.write("nothing order now"); break;
}

document.write("<p/>");
var email = "hossainmamun337@gmail.com";
var email_2 = "hmamun492@gmail.com";
var email_3 = "emadabrar9@gmail.com";
switch(email){
    case "hmamun492@gmail.com": document.write("this is the first id:hmamun492@gmail.com"); break;
    case "hossainmamun337@gmail.com": document.write("this is secondary id:hossainmamun337@gmail.com"); break;
    case "emadabrar9@gmail.com": document.write("this is the last id:emadabrar9@gmail.com"); break;
    default: document.write("i have no email id");
}