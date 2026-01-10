

const signInTab = document.querySelector('.Signin');
const signUpTab = document.querySelector('.Signup');
const mainBtn = document.querySelector('.btn-primary');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const confirmField = document.getElementById('confirm-group');
const nameField = document.getElementById('name-group');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

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



mainBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    const nameEl = document.getElementById('full-name');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const confirmEl = document.getElementById('confirm-password');

    const nameVal = nameEl.value.trim();
    const emailVal = emailEl.value.trim();
    const passVal = passwordEl.value;
    const confirmVal = confirmEl.value;

    
    if (!emailVal) {
        alert("Please enter your email!");
        return;
    }
    if (!passVal) {
        alert("Please enter a password!");
        return;
    }

    
    if (signInTab.classList.contains('active-btn')) {
        
        
        const storedEmail = localStorage.getItem('userEmail');
        const storedPass = localStorage.getItem('userPassword');

        
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

        
        console.log("Login Successful");
        window.location.href = 'main.html';

    } 
    
    else {
        
        
        if (!nameVal) {
            alert("Please enter your full name!");
            return;
        }

        
        if (passVal !== confirmVal) {
            alert("Passwords do not match!");
            confirmEl.value = ""; 
            return; 
        }

        
        console.log("Creating new user:", nameVal);
        
        localStorage.setItem('userEmail', emailVal);
        localStorage.setItem('userPassword', passVal);
        localStorage.setItem('userName', nameVal);

        
        window.location.href = 'main.html';
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

        window.location.href = 'main.html';
    });
}


if (appleBtn) {
    appleBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const fakeName = "Apple User";
        const fakeEmail = "user@icloud.com";

        localStorage.setItem('userName', fakeName);
        localStorage.setItem('userEmail', fakeEmail);

        window.location.href = 'main.html';
    });
}