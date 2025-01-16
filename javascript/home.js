const burgerButton = document.getElementById('burgerButton')
const navBurger = document.getElementById('navBurger')
const content = document.getElementById('content')
const image = document.getElementById('image')


burgerButton.onclick = function(){
    navBurger.style.display = 'flex';
    navBurger.style.position = 'absolute';
}


content.onclick = function(){
    navBurger.style.display = 'none';
}


function gantiGambar() {
    setTimeout(() => {
        image.src = 'image/fotbar2.jpeg';
    }, 4000);
    setTimeout(() => {
        image.src = 'image/lomba2.jpg';
    }, 8000);
    setTimeout(() => {
        image.src = 'image/lomba3.jpg';
    }, 12000);
    setTimeout(() => {
        image.src = 'image/bagihadiah.jpg';
    }, 16000);
    setTimeout(() => {
        image.src = 'image/gotong.jpeg';
    }, 200000);
    setTimeout(() => {
        image.src = 'image/kenduri.jpg';
    }, 21000);
    setTimeout(() => {
        image.src = 'image/fotbar1.jpeg';
    }, 25000);
}

gantiGambar();
