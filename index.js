// Your web app's Firebase configuration

const { default: firebase } = require("firebase/compat/app");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ngZCZavOM77Z6O2PaSFl3FztHGcjobk",
  authDomain: "sanders-178b9.firebaseapp.com",
  databaseURL: "https://sanders-178b9-default-rtdb.firebaseio.com",
  projectId: "sanders-178b9",
  storageBucket: "sanders-178b9.appspot.com",
  messagingSenderId: "225334600973",
  appId: "1:225334600973:web:39d2f699dd719eecadbc44",
  measurementId: "G-GMMS2WFE3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = firebase.auth()
const database = firebase.database()

function register(){
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    favourite_song = document.getElementById('favourite_song').value
    milk_before_cereal = document.getElementById('milk_before_cereal').value

    if (validate_email(email) == false || validate_password(password) == false ){
        alert ('Email or Password is Outta Line!!')
        return
    }
    if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false)
        alert('One or More Extra Fields is Outta Line!!')
    return
}

function validate_email (email) {
   expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true){
        return true
    } else {
        return false
    }
}

function validate_password(password){
    if(password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }
    if (field.length<= 0) {
        return false
    } else {
        return true
    }
}