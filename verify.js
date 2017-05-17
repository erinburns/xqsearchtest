firebase.auth().onAuthStateChanged(function (firebaseUser) {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
            btnSignUp.classList.add('hide');
            btnLogin.classList.add('hide');
            }
        if (firebaseUser) {
          firebaseUser.sendEmailVerification().then(function() {
            // Email sent.
          }, function(error) {
            // An error happened.
          })
        } else {
	       console.log('not logged in');
            btnLogout.classList.add('hide');
            btnSignUp.classList.remove('hide');
            btnLogin.classList.remove('hide');        
	   } // else
    })(); 