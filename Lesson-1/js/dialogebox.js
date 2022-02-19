function warn(){
    window.alert("This is a warning message");
    document.write("Warning - 404")
}

function getConfirm(){
   var retVal = confirm("Do you want to proceed?");
   if(retVal == true){
    document.write(" User confirm was successful <br/>")
    document.write("Successful Login");
   }
   else {
    document.write(" User confirm was unsuccessful <br/>")
    document.write("Successful Login");
   }
}

function getPrompt(){
    var retVal = prompt("Enter Your UserName :", "Username")
    document.write("The entered username is " + retVal)
}
function getAddition(){
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;
    var sum = parseInt(n1)+parseInt(n2)
    window.alert("The Sum is :"+ sum );
    document.write("The Sum is :"+ sum);
}

function getSubs(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var n3 = parseInt(n1) - parseInt(n2);
    document.write("The Subs is :"+ n3);
    alert(n3);
}

function getdiv(){
    var n1 = document.getElementById("division1").value;
    var n2 = document.getElementById("division2").value;
    var n3 =  n1/n2;
    document.write("The Quotinet is :"+ n3);
    alert(n3);
}
