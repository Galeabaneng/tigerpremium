




function loginn(){

  var firebaseConfig = {
    apiKey: "AIzaSyArI_EHCGOEm-TTv8ts8wW_vtVRgMqR3lI",
    authDomain: "https://www.google.com",
    projectId: "masele-33a46",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "200216185593",
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
  
}



  
      



function signUpp(){
    
  var firebaseConfig = {
    apiKey: "AIzaSyArI_EHCGOEm-TTv8ts8wW_vtVRgMqR3lI",
    authDomain: "https://www.google.com",
    projectId: "masele-33a46",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "200216185593",
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









