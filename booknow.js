const hamburger = document.querySelector('.hamburger');

const mobileMenu = document.querySelector('.tabletnav-container');
const storedName = localStorage.getItem('userName');
const nameElement = document.querySelectorAll('.username');
const noBtnElement = document.querySelector('.no-btn');

hamburger.addEventListener('click', () => {
    console.log("Im clicked")
    hamburger.classList.toggle('active');


    mobileMenu.classList.toggle('active');
});

if (storedName) {
    nameElement[0].innerText = storedName;
    nameElement[1].innerText = storedName;
}
const profileMenu = document.querySelector('.user-icon');
const logoutBtn = document.querySelector('.goback');
const profileMenuH = document.querySelector('.user-iconH');

profileMenu.addEventListener('click', () => {
    logoutBtn.classList.toggle('active');
});
profileMenuH.addEventListener('click', () => {
    logoutBtn.classList.toggle('active');
});
noBtnElement.addEventListener('click', () => {
    logoutBtn.classList.toggle('active');
});


const results = document.querySelectorAll('.places-with-ratings');
const resultsNumber = document.querySelectorAll('.results');
const showing = document.querySelector('.showing');

resultsNumber[1].addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    results[0].classList.remove('hidden');
    results[1].classList.add('hidden');
    results[2].classList.add('hidden');


    resultsNumber[1].classList.add('active');
    resultsNumber[2].classList.remove('active');
    resultsNumber[3].classList.remove('active');
    showing.innerText = '01';
});

resultsNumber[2].addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    results[0].classList.add('hidden');
    results[1].classList.remove('hidden');
    results[2].classList.add('hidden');

    resultsNumber[1].classList.remove('active');
    resultsNumber[2].classList.add('active');
    resultsNumber[3].classList.remove('active');
    showing.innerText = '02';
});


resultsNumber[3].addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    results[0].classList.add('hidden');
    results[1].classList.add('hidden');
    results[2].classList.remove('hidden');


    resultsNumber[1].classList.remove('active');
    resultsNumber[2].classList.remove('active');
    resultsNumber[3].classList.add('active');
    showing.innerText = '03';
});