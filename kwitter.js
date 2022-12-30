
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDLqAoW9NEbypnJMu2XROBf4wt2yF6TY6E",
  authDomain: "aaaaaaaaaaa-b387c.firebaseapp.com",
  databaseURL: "https://aaaaaaaaaaa-b387c-default-rtdb.firebaseio.com",
  projectId: "aaaaaaaaaaa-b387c",
  storageBucket: "aaaaaaaaaaa-b387c.appspot.com",
  messagingSenderId: "558061163711",
  appId: "1:558061163711:web:73c7631dc6848ce552a20a",
  measurementId: "G-1NRS3P6EH5"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//adiciona o usuário
function addUser() {
  //guarda o que o nome que o usuário digitou
  userName = document.getElementById("userName").value;
  //coloca na memória do navegador
  localStorage.setItem("userName", userName);

  
  //troca de site
  window.location = "kwitterRoom.html";
}

