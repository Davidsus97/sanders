// Your web app's Firebase configuration
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
firebase.initializeApp(firebaseConfig);

// Get references to the auth and database services
const auth = firebase.auth();
const database = firebase.database();

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const full_name = document.getElementById("full_name").value;
  const favourite_song = document.getElementById("favourite_song").value;
  const milk_before_cereal =
    document.getElementById("milk_before_cereal").value;

  if (!validate_email(email) || !validate_password(password)) {
    alert("Email or Password is Outta Line!!");
    return;
  }
  if (
    !validate_field(full_name) ||
    !validate_field(favourite_song) ||
    !validate_field(milk_before_cereal)
  ) {
    alert("One or More Extra Fields is Outta Line!!");
    return;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      const user = auth.currentUser;
      const database_ref = database.ref();

      const user_data = {
        full_name: full_name,
        email: email,
        password: password,
        favourite_song: favourite_song,
        milk_before_cereal: milk_before_cereal,
        last_login: Date.now(),
        custom: 1,
        itid: 1,
        orid: 1,
      };

      database_ref.child("users/" + user.uid).set(user_data);

      alert("User Created!!");
    })
    .catch(function (error) {
      const error_message = error.message;
      alert(error_message);
    });
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!validate_email(email) || !validate_password(password)) {
    alert("Email or Password is Outta Line!!");
    return;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      const user = auth.currentUser;
      const database_ref = database.ref();

      const user_data = {
        last_login: Date.now(),
      };

      database_ref.child("users/" + user.uid).update(user_data);

      alert("User Logged In!!");
    })
    .catch(function (error) {
      const error_message = error.message;
      alert(error_message);
    });
}

function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  return password.length >= 6;
}

function validate_field(field) {
  return field != null && field.length > 0;
}
