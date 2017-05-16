(function() {
    
   // initialize firebase
    const config = {
            apiKey: "AIzaSyC1PKNs7ifneJGXEib55zvkMHc93JD4r4E",
            authDomain: "authtest-54513.firebaseapp.com",
            databaseURL: "https://authtest-54513.firebaseio.com",
            projectId: "authtest-54513",
            storageBucket: "authtest-54513.appspot.com",
            messagingSenderId: "1081226378409"
          };
          firebase.initializeApp(config);
    
    // get the login form elements from HTML
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
    
    // add login event
    btnLogin.addEventListener('click', e => {
       // get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // sign in 
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    
    // add signup event. the signup button sends user email and pass to firebase
    btnSignUp.addEventListener('click', e => {
        // get email and pass
        // TODO: validate email - check it is real
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // sign in 
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    
    // show logout button when user is logged in
    // TODO: make sure the login form clears the credentials on logout
    btnLogout.addEventListener('click', e=> {
       firebase.auth().signOut(); 
    });
    
    // realtime authentication listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
       if (firebaseUser) {
           console.log(firebaseUser);
           btnLogout.classList.remove('hide');
           btnSignUp.classList.add('hide');
           btnLogin.classList.add('hide');
       } else {
           console.log('not logged in');
           btnLogout.classList.add('hide');
           btnSignUp.classList.remove('hide');
           btnLogin.classList.remove('hide');
       } // end if statement
    }); // end function
})();