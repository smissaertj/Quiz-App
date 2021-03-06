/*
Helper functions
*/
const retrieveUsers = () => {
  return JSON.parse(localStorage.getItem('userProfiles') || '[]');
}

const currentLoggedInUser = () => {
  return JSON.parse(localStorage.getItem('currentLoggedInUser'));
}

const retrieveUserValue = (key) => {
  let user = currentLoggedInUser()
  return retrieveUsers()[user.userIndex][key];
}

const updateUserProfile = (userIndex, key, value) => {
  let users = retrieveUsers();
  users[userIndex][key] = value;
  localStorage.setItem('userProfiles', JSON.stringify(users));
}

const changePageState = () => {
  let loggedInUser = currentLoggedInUser();
  let linkProfile = document.getElementById('linkProfile');

  if (loggedInUser) {
    // Enable the Profile page
    linkProfile.classList.remove('disabled');

    // Enable logout
    let linkLogin = document.getElementById('linkLogin');
    linkLogin.textContent = '<Logout>';
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
  } else {
    // Disable the profile link if no user is logged in.
    linkProfile.classList.add('disabled');
  }
}

const closeModal = (modalId) => {
  let modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
  modal.hide();
  location.reload();
}

const loginUser = (userName, userIndex) => {
  // login a user
  let user = { userName: userName, userIndex: userIndex};
  localStorage.setItem('currentLoggedInUser', JSON.stringify(user)); // Set the user as logged in.
  changePageState();

}

const logoutUser = () => {
  // logout a user
  localStorage.removeItem('currentLoggedInUser');
  location.reload();
}


/*
User Sign up
*/
const createUserProfile = (username, passwordHash) => {
  // retrieve the existing users
  let users = retrieveUsers();

  // check if a username already exists
  let usernameExists = users.some(user => user.username === username);

  if (usernameExists) {
    return false;
  } else {
    user = {
      'username': username,
      'password': passwordHash,
      'totalPoints': 0,
      'currentRank': 0,
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
    // username exists
    modalHeader.firstElementChild.textContent = "Username exists.";
    p.innerHTML = '<small>Please choose a different username.</small>';
    modalBody.appendChild(p);
    btnClose.addEventListener('click', function(ev){
      ev.preventDefault();
      closeModal('getStarted');
    })
  } else {
    // username does not exist and the new profile was created.
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
const updateScoreRank = () => {
  // update the Total Points and Stars in Profile
  let totalPoints = retrieveUserValue('totalPoints');
  let currentRank = retrieveUserValue('currentRank');

  let displayTotalPoints = document.getElementById('displayTotalPoints');
  displayTotalPoints.textContent = `Total Points: ${totalPoints}`;

  let displayCurrentRank = document.getElementById('displayCurrentRank');
  if (totalPoints >= 10){
    displayCurrentRank.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(currentRank)
  } else {
    displayCurrentRank.innerHTML = '<i class="fa-solid fa-star-half"></i>'
  }

}


function showUserProfile(){
  // Display the Profile section
  let user = currentLoggedInUser();
  let userName = user.userName[0].toUpperCase() + user.userName.slice(1);
  let heroContainer = document.getElementById('heroContainer');
  heroContainer.setAttribute('style', 'display: none');

  let profileContainer = document.getElementById('profileContainer');
  profileContainer.setAttribute('style', 'display: block');

  let profileTitle = document.getElementById('profileTitle');
  profileTitle.textContent = `Welcome ${userName}!`;

  let profileCardsRow = document.getElementById('homeCardsContainer').firstElementChild;
  profileCardsRow.classList.remove('glass');

  let profileCards = document.querySelectorAll('.profileCard');
  profileCards.forEach(card => card.style.display = 'block');

  let quizButtons = document.querySelectorAll('.startQuizButton');
  for (let quizIndex in quizButtons){
    quizButtons[quizIndex].innerHTML = `<button type="button" class="btn btn-outline-secondary btn-sm px-4 playQuizBtn" onclick="quiz.play(${quizIndex})">Play!</button>`
  }

  let leaderboardDiv = document.getElementById('leaderBoard');
  leaderboardDiv.style.display = 'none';

  let linkProfile = document.getElementById('linkProfile');
  linkProfile.classList.add('disabled');

  updateScoreRank();
}


/*
  Populate the LeaderBoard
*/
const populateLeaderBoard = () => {
  // retrieve data from localStorage and build the leaderboard table
  let tableBody = document.getElementById('leaderBoardTableBody')
  let tableBodyContent = '';

  let users = retrieveUsers();

  // Sort our Array of user objects descending on the totalPoints property
  users.sort((a, b) => (a.totalPoints > b.totalPoints) ? -1 : 1)

  // loop and add to table
  for (let user of users){
    if (user.totalPoints > 0){

      let stars = ''
      if (user.currentRank > 0){
        for (let i = 0; i < user.currentRank; i++){
          stars += '<i class="fa-solid fa-star"></i>'
        }
      } else {
        stars = '<i class="fa-solid fa-star-half"></i>'
      }

      let row = `<tr><td>${user.username}</td><td>${stars}</td><td>${user.totalPoints}</td></tr>`;
      tableBodyContent += row;
    }
  }
  tableBody.innerHTML = tableBodyContent;
}


/*
Show Leaderboard
*/
const showLeaderBoard = () => {
  // display the leaderboard
  let profileCardsRow = document.getElementById('homeCardsContainer').firstElementChild;
  profileCardsRow.classList.remove('glass');

  let profileCards = document.querySelectorAll('.profileCard');
  profileCards.forEach(card => card.style.display = 'none');

  let resultCard = document.getElementById('resultCard');
  resultCard.style.display = 'none';

  let leaderboardDiv = document.getElementById('leaderBoard');
  leaderboardDiv.style.display = 'block';

  let linkProfile = document.getElementById('linkProfile');
  linkProfile.classList.remove('disabled');

  populateLeaderBoard();
  changePageState();
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
    this.questionPoolLength = 10
    this.currentQuestion = 0

    // Construct an array of question indexes from the chosen category
    this.questionList = questions.map((el, index) => {
      if (el.category === quizCategory){
        return index;
      }
    }).filter(el => el !== undefined);

    // Shuffle this.questionList
    for (let i = this.questionList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questionList[i], this.questionList[j]] = [this.questionList[j], this.questionList[i]];
    }

    // Limit the number of questions
    this.questionList = this.questionList.slice(0,this.questionPoolLength)

    // Hide profile cards, show quiz card
    let profileCardsRow = document.getElementById('homeCardsContainer').firstElementChild;
    let profileCardsColumns = document.querySelectorAll('div.profileCard');
    let quizCard = document.getElementById('quizCard');
    profileCardsRow.classList.add('glass');
    profileCardsRow.appendChild(quizCard);
    quizCard.setAttribute('style', 'display: block');
    profileCardsColumns.forEach(el => el.style.display = "none");
    this.showQuestion();
  },

  showQuestion: function(){
    // We don't want the user to navigate away when a quiz is ongoing.
    this.linkLeaderBoard = document.getElementById('linkLeaderBoard');
    this.linkLeaderBoard.classList.add('disabled');

    this.timerDiv = document.getElementById('timerDiv');
    this.timerDiv.style.display = ''; // make sure the timer is visible in case it was hidden after a time up event.
    this.timer = document.getElementById('progressbarTimer');
    this.timer.setAttribute('aria-valuenow', '100');

    // Reset timer color on each new question
    this.timer.className.split(' ').some((el) => {
      if (/^bg-.*$/.test(el)){
        this.timer.classList.replace(el, 'bg-secondary')
      }
    });

    let timerPosition = 100;
    this.interval = setInterval(() => {
      timerPosition -= 0.05;
      this.timer.style.width = timerPosition + '%';
      this.timer.setAttribute('aria-valuenow', timerPosition);

      if (timerPosition < 70){
        this.timer.classList.replace('bg-secondary', 'bg-warning');
      }
      if (timerPosition < 40){
        this.timer.classList.replace('bg-warning', 'bg-danger');
      }
      if (timerPosition <= 0) {
        clearInterval(this.interval);
        this.score--; // penalty for not answering within the time limit
        // this.nextQuestion();
        this.checkAnswer();
      }
    }, 1)

    // populate the question and answers
    let currentQuestion = questions[this.questionList[this.currentQuestion]];
    this.questionTitle = document.getElementById('questionTitle');
    this.questionTitle.textContent = currentQuestion.question;

    let answers = currentQuestion.answers;
    this.answerDiv = document.getElementById('quizAnswers');
    this.answerDiv.innerHTML = ''; // Clear answers of the previous question
    for (let answer of answers) {
      let btn = document.createElement('button');
      btn.classList.add('btn', 'playQuizBtn', 'btn-answer', 'my-2');
      btn.textContent = answer;
      this.answerDiv.appendChild(btn);
    }

    // prevent the user from clicking Next until an answer was clicked.
    this.btnNext = document.getElementById('btnNext');
    this.btnNext.classList.remove('btn-success');
    this.btnNext.classList.add('disabled', 'btn-outline-secondary');

    // listen for an answer
    let btnAnswers = document.querySelectorAll('.btn-answer');
    btnAnswers.forEach((element, index) => {
      element.addEventListener('click', () => {
        clearInterval(this.interval);
        this.checkAnswer(index);
        this.btnNext.classList.remove('disabled');
      })
    })
  },

  checkAnswer: function(answerIndex){
    let currentQuestion = questions[this.questionList[this.currentQuestion]]
    let btns = document.querySelectorAll('.btn-answer');
    let btn = btns[answerIndex];
    if (answerIndex === undefined){
      // The user did not click an answer within the time limit. We show a popup and only allow the user to move to
      // the next question if the popup is closed.
      let timeUpToastEl = document.getElementById('timeUpToast');
      let timeUpToast = new bootstrap.Toast(timeUpToastEl, { autohide: false });
      timeUpToast.show();
      this.timerDiv.style.display = 'none';

      let btnClosetimeUpToast = document.getElementById('btnClosetimeUpToast');
      btnClosetimeUpToast.addEventListener('click', () =>{
        this.btnNext.classList.remove('disabled', 'btn-outline-secondary');
        this.btnNext.classList.add ('btn-success');
      })

      // TODO Toast Alignment/placement!

    } else if (answerIndex === currentQuestion.correctAnswerID){
      btn.classList.add('btn-success', 'animate__animated', 'animate__shakeY');
      this.score++ // increment the score
    } else {
      btn.classList.add('btn-danger', 'animate__animated', 'animate__shakeX');
    }
    // Prevent user from clicking other answers once an answer was already clicked.
    btns.forEach(button => button.disabled = true);
  },

  nextQuestion: function(){
    if (this.currentQuestion < this.questionList.length - 1) {
      this.currentQuestion++;
      this.showQuestion();
    } else {
      // when we reached the end of the question pool we show the result
      this.linkLeaderBoard.classList.remove('disabled');

      let quizCard = document.getElementById('quizCard');
      quizCard.style.display = 'none';

      let resultCard = document.getElementById('resultCard');
      resultCard.style.display = 'block';

      let endScore = document.getElementById('endScore');
      endScore.innerHTML = `<i class="fa-solid fa-flag-checkered fa-3x my-2"></i>
                            <p>Correct Answers: ${this.score}/${this.questionList.length}</p>`

      let btnLeaderBoard = document.getElementById('btnLeaderBoard');
      btnLeaderBoard.classList.remove('disabled');
      btnLeaderBoard.addEventListener('click', () =>{
        // this.saveState();
        showLeaderBoard();
      })

      this.saveState();
    }
  },

  saveState: function(){
    // update the user profile with the new score.
    let userIndex = currentLoggedInUser().userIndex;
    let totalPoints = retrieveUsers()[userIndex].totalPoints;
    totalPoints += this.score;
    updateUserProfile(userIndex, 'totalPoints', totalPoints);
    updateUserProfile(userIndex, 'currentRank', Math.floor(totalPoints / 10));
    updateScoreRank(); // reflect the changes in the profile hero
  }
}


/*
 On Page (re)Load Functions
*/
changePageState();