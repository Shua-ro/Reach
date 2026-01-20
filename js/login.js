

const signInTab = document.querySelector('.Signin');
const signUpTab = document.querySelector('.Signup');
const mainBtn = document.querySelector('.btn-primary');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const confirmField = document.getElementById('confirm-group');
const nameField = document.getElementById('name-group');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const errorElement = document.querySelector('.error');
const nameS = document.getElementById('nick-name')

const passErrorElement = document.querySelector('.passerror');

/* This is Where the Sign In and Sign up Button js to change colors and active buttons */
signUpTab.addEventListener('click', () => {

    signUpTab.classList.remove("active-btn");
    signInTab.classList.remove("active-btn");
    signInTab.classList.add("inactive-btn");
    signUpTab.classList.remove("inactive-btn");
    signUpTab.classList.add("active-btn");


    signInTab.style.pointerEvents = "auto";
    signUpTab.style.pointerEvents = "none";


    confirmField.classList.remove('hidden');
    nameField.classList.remove('hidden');

    title.innerText = "Create Account";
    subtitle.innerText = "Join us to explore the world!";
    mainBtn.innerText = "Sign Up";
});

signInTab.addEventListener('click', () => {

    signUpTab.classList.remove("inactive-btn");
    signInTab.classList.remove("inactive-btn");
    signInTab.classList.add("active-btn");
    signUpTab.classList.remove("active-btn");
    signUpTab.classList.add("inactive-btn");


    signUpTab.style.pointerEvents = "auto";
    signInTab.style.pointerEvents = "none";


    confirmField.classList.add('hidden');
    nameField.classList.add('hidden');

    title.innerText = "Welcome Back!";
    subtitle.innerText = "We Are Happy to See You Again";
    mainBtn.innerText = "Login";
});


/* This is for when The Login or Sign Up button is clicked */
mainBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const nameEl = document.getElementById('nick-name');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const confirmEl = document.getElementById('confirm-password');

    const nameVal = nameEl.value.trim();
    const emailVal = emailEl.value.trim();
    const passVal = passwordEl.value;
    const confirmVal = confirmEl.value;

    /* If email and password is empty or null we display alert */
    if (!emailVal) {
        alert("Please enter your email!");
        return;
    }
    if (!passVal) {
        alert("Please enter a password!");

        return;
    }

    /* This says "If we are in the Sign In section" */
    if (signInTab.classList.contains('active-btn')) {


        const storedEmail = localStorage.getItem('userEmail');
        const storedPass = localStorage.getItem('userPassword');

        /* If the Email/password matches the local storage or if there is an email/password in the local storage*/
        if (!storedEmail) {
            alert("No account found! Please Sign Up first.");
            return;
        }


        if (emailVal !== storedEmail) {
            alert("Email not found / incorrect!");
            return;
        }


        if (passVal !== storedPass) {
            alert("Incorrect password!");

            return;
        }

        /* we print to check if working */
        console.log("Login Successful");
        window.location.href = 'home.html';


    }
    /* Else if we are not in Sign In tab and instead, we are in the Sign Up tab */
    else {

        /* If there is no name input and name is too long */
        if (!nameVal) {
            alert("Please enter your name!");
            return;
        }
        if (nameVal.length > 14) {

            errorElement.classList.remove('hidden');

            /* alert("Name is too long!"); */

            return;
        }
        /* If password is too short */

        if(passVal.length < 6){
            passErrorElement.classList.remove('hidden');
            
            console.log(passErrorElement);
            return;
        }

        /* If the password does not equal confirm password */
        if (passVal !== confirmVal) {
            alert("Passwords do not match!");
            confirmEl.value = "";
            return;
        }


        console.log("Creating new user:", nameVal);

        localStorage.setItem('userEmail', emailVal);
        localStorage.setItem('userPassword', passVal);
        localStorage.setItem('userName', nameVal);


        window.location.href = 'home.html';
    }
});


const googleBtn = document.querySelector('.btn-google');
const appleBtn = document.querySelector('.btn-apple');

if (googleBtn) {
    googleBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const fakeName = "Google User";
        const fakeEmail = "user@gmail.com";

        localStorage.setItem('userName', fakeName);
        localStorage.setItem('userEmail', fakeEmail);

        window.location.href = 'home.html';
    });
}


if (appleBtn) {
    appleBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const fakeName = "Apple User";
        const fakeEmail = "user@icloud.com";

        localStorage.setItem('userName', fakeName);
        localStorage.setItem('userEmail', fakeEmail);

        window.location.href = 'home.html';
    });
}

if (nameS) {
    nameS.addEventListener('focus', () => {
        errorElement.classList.add('hidden');
    });

}
if (nameS) {
    nameS.addEventListener('input', () => {
        errorElement.classList.add('hidden');
    });

}
