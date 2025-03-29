// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpYdSPehJ5TaSfsrbGtN-Q_sDhj4TWUb8",
    authDomain: "geeksforgeeks-form-page.firebaseapp.com",
    databaseURL: "https://geeksforgeeks-form-page-default-rtdb.firebaseio.com",
    projectId: "geeksforgeeks-form-page",
    storageBucket: "geeksforgeeks-form-page.firebasestorage.app",
    messagingSenderId: "703761386543",
    appId: "1:703761386543:web:de8da1163acf1a700ecada"
  };
  firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref('GeeksForGeeksForm');


  document.getElementById("form").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    const Name = getElementValue('name');
    const Email = getElementValue('email');
    const MNumber = getElementValue('number');
    const Age = getElementValue('age'); 
    console.log(Name , Email , MNumber , Age);
  }


  const getElementValue = (id) =>{
    return document.getElementById(id).value;
  };