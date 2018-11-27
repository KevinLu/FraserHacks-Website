document.getElementById('mailinglist').addEventListener('submit', submitForm);

function submitForm(e){

  document.querySelector('.mailinglist-alert').style.marginTop = '-2em';
  document.querySelector('.mailinglist-alert').style.opacity = '1';

  setTimeout(function(){
    document.querySelector('.mailinglist-alert').style.marginTop = '-4em';
    document.querySelector('.mailinglist-alert').style.opacity = '0';
  },3000);

  document.getElementById('mailinglist').reset();
}
