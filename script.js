/*
User Sign up
*/
const createUserProfile = (username, passwordHash) => {
  // retrieve the existing users or create an empty array
  let users = JSON.parse(localStorage.getItem('userProfiles') || '[]');
  console.log(users);

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


const closeModal = (modalId) => {
  let modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
  modal.hide();
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
    location.reload();
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

