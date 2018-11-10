alert("THIS WEBSITE IS UDER CONSTRUCTION !");
//function alert1(){
//var name = prompt("USERNAME");
//alert ("Bonjour " + name);}
///setTimeout(alert1,2000)
let b = true;
function change() {
 //document.getElementById('para1').style.color = 'red';
 //document.getElementById('header1').style.color = 'red';
 if(b)
 {document.getElementById('para1', "header1").style.background = "grey";
 document.getElementById("header1").style.backgroundColor= "grey";
 document.getElementById("header1").style.borderLeft= "15px solid grey";
 document.getElementById("header1").style.borderRight= "15px solid grey";
 document.getElementById("header1").style.borderRight= "15px solid #11111 ";
 document.querySelector('body').style.background='#333333'
 document.getElementById('follow').style.color = 'white'
    
}
else {
    document.getElementById('para1', "header1").style.background = "#d30009";
    document.getElementById("header1").style.backgroundColor= "#d30009";
    document.getElementById("header1").style.borderLeft= "15px solid #d30009";
    document.getElementById("header1").style.borderRight= "15px solid #d30009";
    document.querySelector('body').style.background='white'
    document.getElementById('follow').style.color = '#d30009'
}
b=!b;
}

