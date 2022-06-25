/*
Helper functions
*/
const retrieveUsers = () => {
  let users = JSON.parse(localStorage.getItem('userProfiles') || '[]');
  return users;
}

const retrieveLoggedInUser = () => {
  let loggedInUser = localStorage.getItem('currentLoggedInUser');

  if (loggedInUser) {
    // Enable the Profile page
    let linkProfile = document.getElementById('linkProfile');
    linkProfile.classList.remove('disabled');

    // Enable logout
    let linkLogin = document.getElementById('linkLogin');
    linkLogin.textContent = 'Logout';
    linkLogin.addEventListener('click', function(){
      logoutUser();
    });

    // Prevent new account creation, redirect the user to profile
    let btnGetStarted = document.getElementById('btnGetStarted');
    btnGetStarted.textContent = `Let's Play, ${loggedInUser}!`;
    btnGetStarted.setAttribute('onclick', "location.href='profile.html'");
  }
}

const closeModal = (modalId) => {
  let modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
  modal.hide();
  location.reload();
}

const loginUser = (username) => {
  localStorage.setItem('currentLoggedInUser', username); // Set the user as logged in.
  retrieveLoggedInUser();
}

const logoutUser = () => {
  localStorage.removeItem('currentLoggedInUser');
  location.reload();
}


/*
User Sign up
*/
const createUserProfile = (username, passwordHash) => {
  // retrieve the existing users
  let users = retrieveUsers();

  let usernameExists = users.some(user => user.username === username);

  if (usernameExists) {
    return false;
  } else {
    user = {
      'username': username,
      'password': passwordHash
    }
    users.push(user);
    localStorage.setItem('userProfiles', JSON.stringify(users));
    return true;
  }
}


let btnSignUp = document.getElementById('btnSignUp');
btnSignUp.addEventListener('click', function(ev){
  ev.preventDefault();

  let userName =document.getElementById('signupUsername').value;
  let passwordHash = btoa(document.getElementById('signupPassword').value);

  let modalHeader = document.querySelectorAll('.modal-header')[0];
  let signupForm = document.getElementById('signupForm');
  signupForm.parentElement.removeChild(signupForm);
  let modalBody = document.querySelectorAll('.modal-body')[0];
  let p = document.createElement('p');
  let btnClose = document.getElementById('signupBtnClose');

  if (!createUserProfile(userName, passwordHash)){
    modalHeader.firstElementChild.textContent = "Username exists.";
    p.innerHTML = '<small>Please choose a different username.</small>';
    modalBody.appendChild(p);
    btnClose.addEventListener('click', function(ev){
      ev.preventDefault();
      closeModal('getStarted');
  })
  } else {
    modalHeader.firstElementChild.textContent = "Account Created!";
    p.innerHTML = '<small>You may close this window and login.</small>';
    modalBody.appendChild(p);
    btnClose.addEventListener('click', function(ev){
      ev.preventDefault();
      closeModal('getStarted');
    })
  }

})


/*
User Login / Authentication
*/
let btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', function(ev){
  ev.preventDefault();

  let users = retrieveUsers();
  let userName = document.getElementById('loginUsername').value;
  let password = document.getElementById('loginPassword').value;

  let userIndex = users.findIndex(user => user.username === userName);
  let passwordMatch = (userIndex > -1) ? (password === atob(users[userIndex].password)) : false;

  let modalHeader = document.querySelectorAll('.modal-header')[1];
  let loginForm = document.getElementById('loginForm');
  loginForm.parentElement.removeChild(loginForm);
  let modalBody = document.querySelectorAll('.modal-body')[1];
  let p = document.createElement('p');
  let btnClose = document.getElementById('loginBtnClose');

  if (passwordMatch){
    modalHeader.firstElementChild.textContent = 'Thank you for logging in!'
    loginUser(userName);
  } else {
    modalHeader.firstElementChild.textContent = 'Wrong username or password!';
    btnClose.addEventListener('click', function(ev){
      ev.preventDefault();
      closeModal('login');
    })
  }

})

/*
 On Page Load Functions
*/

retrieveLoggedInUser();