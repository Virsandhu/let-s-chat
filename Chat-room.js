
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyC1os6NU4wj0vwK_M7bWqCAswoPIUqcg_c",
      authDomain: "kwitter-b989a.firebaseapp.com",
      projectId: "kwitter-b989a",
      storageBucket: "kwitter-b989a.appspot.com",
      messagingSenderId: "480024657256",
      appId: "1:480024657256:web:3e95312b083f71bab2eadd"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
