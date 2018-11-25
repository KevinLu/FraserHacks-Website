  var config = {
    apiKey: "AIzaSyDo3DmKIh1OIUxv15NtG1A0V6rFGxnVoqI",
    authDomain: "fraserhacks-888.firebaseapp.com",
    databaseURL: "https://fraserhacks-888.firebaseio.com",
    projectId: "fraserhacks-888",
    storageBucket: "fraserhacks-888.appspot.com",
    messagingSenderId: "712365067524"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('mailingList');

document.getElementById('mailinglist').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var email = getInputVal('email');

  saveMessage(email);

  document.querySelector('.mailinglist-alert').style.marginTop = '-2em';
  document.querySelector('.mailinglist-alert').style.opacity = '1';

  setTimeout(function(){
    document.querySelector('.mailinglist-alert').style.marginTop = '-4em';
    document.querySelector('.mailinglist-alert').style.opacity = '0';
  },3000);

  document.getElementById('mailinglist').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email:email
  });
}