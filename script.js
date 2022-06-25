/*
User Profiles Array:
Stores an array of user object which contain
Username, Password, Quiz attempts, Collected Stars and Ranking
*/
let userProfiles = [];

/*
User Sign up
*/
const createUserProfile = (username, passwordHash) => {
  let user = {
    'username': username,
    'password': passwordHash
  }

  userProfiles.push(user);
  localStorage.setItem('userProfiles', JSON.stringify(user));
}


const closeModal = (modalId) => {
  let modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
  modal.hide();
}


let btnSignUp = document.getElementById('btnSignUp');
btnSignUp.addEventListener('click', function(ev){
  ev.preventDefault();

  let userName =document.getElementById('signupUsername').value;
  let passwordHash = btoa(document.getElementById('signupPassword').value);

  createUserProfile(userName, passwordHash);

  // Consider the user to be logged in.
  localStorage.setItem('currentLoggedInUser', userName);

  // Update the modal text
  let modalHeader = document.querySelectorAll('.modal-header')[0];
  modalHeader.firstElementChild.textContent = "Account Created!";

  let signupForm = document.getElementById('signupForm');
  signupForm.parentElement.removeChild(signupForm);

  let modalBody = document.querySelectorAll('.modal-body')[0];
  let p = document.createElement('p');
  p.innerHTML = '<small>You may close this window and login.</small>';
  modalBody.appendChild(p);

  // Close the modal on signupBtnClose click event
  let btnClose = document.getElementById('signupBtnClose');
  btnClose.addEventListener('click', function(ev){
    ev.preventDefault();
    closeModal('getStarted');
  })
})


/*
User Login / Authentication
*/

