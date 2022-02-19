var s = "Hello World";
var s1 = 'Hello World again';
var s2 = new String("Hellooooo World");

document.write(s + "<br />");
document.write(s1 + "<br />");
document.write(s2 + "<br />");


document.write("Length: " + s.length + "<br />");
document.write("Index Of a" + s1.indexOf("a") + "<br />"); // if its  -1 then that means the  character is not in the String array
document.write("Spilt after space " + s1.split(" ") + "<br />");
document.write("Spilt after every char " + s1.split("") + "<br />")
document.write("Lower " + s1.toLowerCase() + "<br />");
document.write("Upper " + s1.toUpperCase() + "<br />");
document.write("replace a character with " +s1.replace("o","l") +"<br />");

function mymet(){

}

document.write("Search " + s1.search("l")+"<br />");
document.write("Reverse "+ s1.split(' ').reverse().join('') + "<br />");

var stringArray = new Array();

s1.split(" ").forEach(e => stringArray.push(e));
document.write(stringArray[2]);