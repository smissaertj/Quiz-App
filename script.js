/*
Helper functions
*/
const retrieveUsers = () => {
  return JSON.parse(localStorage.getItem('userProfiles') || '[]');
}

const currentLoggedInUser = () => {
  return JSON.parse(localStorage.getItem('currentLoggedInUser'));
}

const changePageState = () => {
  let loggedInUser = currentLoggedInUser();

  if (loggedInUser) {
    // Enable the Profile page
    let linkProfile = document.getElementById('linkProfile');
    linkProfile.classList.remove('disabled');

    // Enable logout
    let linkLogin = document.getElementById('linkLogin');
    linkLogin.textContent = 'Logout';
    linkLogin.removeAttribute('data-bs-toggle');
    linkLogin.removeAttribute('data-bs-target');
    linkLogin.addEventListener('click', function(){
      logoutUser();
    });

    // Prevent new account creation, redirect the user to profile
    let btnGetStarted = document.getElementById('btnGetStarted');
    btnGetStarted.textContent = `Play!`;
    btnGetStarted.removeAttribute('data-bs-toggle');
    btnGetStarted.removeAttribute('data-bs-target');
    btnGetStarted.setAttribute('onclick', "showUserProfile()");
  }
}

const closeModal = (modalId) => {
  let modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
  modal.hide();
  location.reload();
}

const loginUser = (userName, userIndex) => {
  let user = { userName: userName, userIndex: userIndex};
  localStorage.setItem('currentLoggedInUser', JSON.stringify(user)); // Set the user as logged in.
  changePageState();

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
  // let modalBody = document.querySelectorAll('.modal-body')[1];
  // let p = document.createElement('p');
  let btnClose = document.getElementById('loginBtnClose');

  if (passwordMatch){
    modalHeader.firstElementChild.textContent = 'Thank you for logging in!'
    loginUser(userName, userIndex);
  } else {
    modalHeader.firstElementChild.textContent = 'Wrong username or password!';
    btnClose.addEventListener('click', function(ev){
      ev.preventDefault();
      closeModal('login');
    })
  }

})


/*
User Profile
*/
const updateCards = () => {
  let quizButtons = document.querySelectorAll('.startQuizButton');

  for (let quizIndex in quizButtons){
    quizButtons[quizIndex].innerHTML = `<button type="button" class="btn btn-outline-secondary btn-sm px-4 playQuizBtn" onclick="quiz.play(${quizIndex})">Play!</button>`
  }
}


function showUserProfile(){
  let user = currentLoggedInUser();
  let heroContainer = document.getElementById('heroContainer');
  heroContainer.setAttribute('style', 'display: none');

  let profileContainer = document.getElementById('profileContainer');
  profileContainer.setAttribute('style', 'display: block');

  let profileTitle = document.getElementById('profileTitle');
  profileTitle.textContent = `Welcome ${user.userName}!`;

  updateCards();
}


/*
Quiz Logic
*/

let quiz = {
  play: function(quizCategory){
    /*
      Set quiz environment variables
    */
    this.user = currentLoggedInUser();
    this.score = 0;

    // Construct an array of question indexes from the chosen category
    this.questionList = questions.map((el, index) => {
      if (el.category === quizCategory){
        return index;
      }
    }).filter(el => el !== undefined);

    // Track how many questions were shown to the user
    this.questionCount = 0;

    // Track which question we showed
    this.questionHistory = []// keep track of what questions we showed

    // Generate a random question
    this.selectRandomQuestion();

    // Hide profile cards, show quiz card
    let profileCardsRow = document.getElementById('homeCardsContainer').firstElementChild;
    let profileCardsColumns = document.querySelectorAll('div.profileCard');
    let quizCard = document.getElementById('quizCard');
    profileCardsRow.classList.add('glass');
    profileCardsRow.appendChild(quizCard);
    quizCard.setAttribute('style', 'display: block');
    profileCardsColumns.forEach(el => el.setAttribute('style', 'display: none'));
  },

  selectRandomQuestion: function() {
    let min = this.questionList[0];
    let max = this.questionList[this.questionList.length - 1] + 1;
    this.questionIndex = Math.floor(Math.random() * (max - min) + min);

    // Remove the questionIndex from this.questionList so that we don't show that question again
    this.questionList.splice(this.questionIndex, 1);

    // Show the question
    this.showQuestion(this.questionIndex);
  },

  showQuestion: function(index){
    console.log(questions[index].question);
    this.checkAnswer();
  },

  checkAnswer: function(){

    this.updatePoints();
    // this.selectRandomQuestion();
  },

  updatePoints: function(){

  },
}


/*
 On Page (re)Load Functions
*/
changePageState();