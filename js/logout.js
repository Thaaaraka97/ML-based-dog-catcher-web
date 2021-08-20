firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      //location.replace("home.html");
      
    } else {
      // No user is signed in.
      location.replace("login.html");
    }
  });
  
  function login(){
    var username=document.getElementById("email").value;
    var password=document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error \n"+errorMessage);
  });
    // window.alert(username+" "+password);
  }
  
  function logout(){
    firebase.auth().signOut();
    location.replace("login.html");
  
  }
  