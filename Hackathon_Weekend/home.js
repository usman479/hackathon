// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDADH7pAKbZnqB3N9Zqc5dU-Rplk4-becI",
    authDomain: "hackathon-2e68a.firebaseapp.com",
    projectId: "hackathon-2e68a",
    storageBucket: "hackathon-2e68a.appspot.com",
    messagingSenderId: "187404127758",
    appId: "1:187404127758:web:8bbd99331fc6ced80ff65f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const firestore = firebase.firestore();

const signOut = () => {
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
    location.href = "./index.html"
  }).catch((error) => {
    // An error happened.
  });
}
