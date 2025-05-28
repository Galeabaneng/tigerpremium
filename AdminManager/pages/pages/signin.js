
function loginn(){

    var user= document.getElementById("emaill").value;
    var password= document.getElementById("password").value;
    
    if(user=="tigerpremiumadmn1@gmail.com" && password=="Admin100"){
          window.location.href=("dashboard.html");
    }else{
       alert("Wrong Credentials");
    }


 }
