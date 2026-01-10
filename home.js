const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.tabletnav-container');
const storedName = localStorage.getItem('userName');
const nameElement = document.querySelector('.username');

hamburger.addEventListener('click', () => {
    
    hamburger.classList.toggle('active');
    
    
    mobileMenu.classList.toggle('active');
});
if(storedName){
    nameElement.innerText = storedName;
}