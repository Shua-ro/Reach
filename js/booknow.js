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
    results[3].classList.add('hidden');


    resultsNumber[1].classList.add('active');
    resultsNumber[2].classList.remove('active');
    resultsNumber[3].classList.remove('active');
    resultsNumber[4].classList.remove('active');
    showing.innerText = '01';
});

resultsNumber[2].addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    results[0].classList.add('hidden');
    results[1].classList.remove('hidden');
    results[2].classList.add('hidden');
    results[3].classList.add('hidden');

    resultsNumber[1].classList.remove('active');
    resultsNumber[2].classList.add('active');
    resultsNumber[3].classList.remove('active');
    resultsNumber[4].classList.remove('active');
    showing.innerText = '02';
});


resultsNumber[3].addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    results[0].classList.add('hidden');
    results[1].classList.add('hidden');
    results[2].classList.remove('hidden');
    results[3].classList.add('hidden');


    resultsNumber[1].classList.remove('active');
    resultsNumber[2].classList.remove('active');
    resultsNumber[3].classList.add('active');
    resultsNumber[4].classList.remove('active');
    showing.innerText = '03';
});
resultsNumber[4].addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    results[0].classList.add('hidden');
    results[1].classList.add('hidden');
    results[2].classList.add('hidden');
    results[3].classList.remove('hidden');

    resultsNumber[1].classList.remove('active');
    resultsNumber[2].classList.remove('active');
    resultsNumber[3].classList.remove('active');
    resultsNumber[4].classList.add('active');
    showing.innerText = '04';
});

const popupDetails = document.getElementById('popup-details');
const closeBtn = document.querySelector('.close');
const detailsButtons = document.querySelectorAll('.details-link');


const titleDetails = document.getElementById('title-details');
const titleLocation = document.getElementById('title-location');
const detailPrice = document.getElementById('detail-price');
const detailImage = document.getElementById('detImage'); 


detailsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const card = btn.closest('.result-card');

        
        const title = card.querySelector('h4').innerText;
        const location = card.querySelector('.loc').innerText;
        const price = card.querySelector('.price-line span').innerText;

        const style = window.getComputedStyle(card.querySelector('.picture'));
        const bgImage = style.backgroundImage.slice(5, -2);

        titleDetails.innerText = title;
        titleLocation.innerText = location;
        detailPrice.innerText = price;
        detailImage.src = bgImage;

        popupDetails.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

const closePopup = () => {
    popupDetails.classList.remove('active');
    document.body.style.overflow = 'auto';
};

closeBtn.addEventListener('click', closePopup);

window.addEventListener('click', (e) => {
    if (e.target === popupDetails) {
        closePopup();
    }
});