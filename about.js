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

if(storedName){
    nameElement[0].innerText = storedName;
    nameElement[1].innerText = storedName;
}
const profileMenu = document.querySelector('.user-icon');
const logoutBtn = document.querySelector('.goback');
const profileMenuH = document.querySelector('.user-iconH');

profileMenu.addEventListener('click', ()=>{
    logoutBtn.classList.toggle('active');
});
profileMenuH.addEventListener('click', ()=>{
    logoutBtn.classList.toggle('active');
});
noBtnElement.addEventListener('click', ()=>{
    logoutBtn.classList.toggle('active');
});

