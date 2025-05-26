
function loginn(){

    var user= document.getElementById("emaill").value;
    var password= document.getElementById("password").value;
    
    if(user=="Admin" && password=="Adminadmin"){
          window.location.href=("dashboard.html");
    }else{
       alert("Wrong Credentials");
    }


 }
