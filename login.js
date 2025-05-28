




function loginn(){

  var firebaseConfig = {
    apiKey: "AIzaSyAH5RNUor97csWr2TAyYgZctyAxhXWb0CA",
    authDomain: "https://www.google.com",
    projectId: "tigerpremium-54fd8",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "1070811172216",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
          
          window.location.href=("main.html");
          const inputValue = document.getElementById('email').value;
          localStorage.setItem('user', inputValue);
          
      })
      .catch(function(error) {
        console.log(error.message);
          alert("Login failed,make sure you have an active Account");
      });

  if(email=="tigerpremiumadmn1@gmail.com"&&password=="Admin100"){
     window.location.href=("https://tigerpremiumwarranty.netlify.app/adminmanager/pages/pages/sign-in.html");
  }
  
}



  
      



function signUpp(){
    
  var firebaseConfig = {
    apiKey: "AIzaSyAH5RNUor97csWr2TAyYgZctyAxhXWb0CA",
    authDomain: "https://www.google.com",
    projectId: "tigerpremium-54fd8",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "1070811172216",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

  var email = document.getElementById("emailUp").value;
  var password = document.getElementById("passwordUp").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user) {

        
      alert("Sign up successful!");
      window.location.href=("index.html");
      
    })
    .catch(function(error) {
      console.log(error.message);
    });


           





}









