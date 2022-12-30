
//ADICIONE SEU LINK DO FIREBASE
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



//apaga o nome do usuário
function logout() { 
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
//exibe o nome do usuário no site kwitterRoom.js
function carregar(){
  var nome = localStorage.getItem("userName");
 document.getElementById("userName").innerHTML = " Seja bem vindo(a) "  +  nome;
}