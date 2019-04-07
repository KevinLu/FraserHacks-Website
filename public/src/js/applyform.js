  // Initialize Firebase (ADD YOUR OWN DATA)
  var config = {
      apiKey: "AIzaSyAyRm28YZctFRuMnZjVq1RUUvzRyhz4dAI",
      authDomain: "fraserhacks-15afa.firebaseapp.com",
      databaseURL: "https://fraserhacks-15afa.firebaseio.com",
      projectId: "fraserhacks-15afa",
      storageBucket: "fraserhacks-15afa.appspot.com",
      messagingSenderId: "775785087975"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref('applications');

  // Listen for form submit
  document.getElementById('applications').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e) {
      e.preventDefault();

      // Get values
      var name = getInputVal('name');
      var school = getInputVal('school');
      var dateofbirth = getInputVal('dateofbirth');
      var email = getInputVal('email');
      var pdsb = getInputVal('pdsb');
      var dietary = getInputVal('dietary');
      var supervisor = getInputVal('supervisor');
      var team = getInputVal('team');
      var resume = getInputVal('resume');

      var gender;
      document.getElementsByName('gender').forEach(function (elm) {
          if (elm.checked) {
              gender = elm.value;
          }
      })

      var tshirt;
      document.getElementsByName('tshirt').forEach(function (elm) {
          if (elm.checked) {
              tshirt = elm.value;
          }
      })

      // Save message
      saveMessage(name, school, email, pdsb, dateofbirth, gender, dietary, supervisor, tshirt, team, resume);

      //   // Show alert
      //   document.querySelector('.alert').style.display = 'block';

      //   // Hide alert after 3 seconds
      //   setTimeout(function(){
      //     document.querySelector('.alert').style.display = 'none';
      //   },5000);

      //Clear form
      document.getElementById('applications').reset();
      ga('Student Form', 'submit', 'FraserHacks 2019');
      window.location.href = "success.html";
  }

  // Function to get get form values
  function getInputVal(id) {
      return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, school, email, pdsb, dateofbirth, gender, dietary, supervisor, tshirt, team, resume) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          school: school,
          dateofbirth: dateofbirth,
          gender: gender,
          dietary: dietary,
          tshirt: tshirt,
          email: email,
          pdsb: pdsb,
          supervisor: supervisor,
          team: team,
          resume: resume
      });
  }