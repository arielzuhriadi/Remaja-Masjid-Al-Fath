const burgerButton = document.getElementById('burgerButton')
const navBurger = document.getElementById('navBurger')
const content = document.getElementById('content')

burgerButton.onclick = function(){
    navBurger.style.display = 'flex';
    navBurger.style.position = 'absolute';
}


content.onclick = function(){
    navBurger.style.display = 'none';
}



function kirimPesan() {
    alert('maaf pesan anda tidak terkirim silahkan hubungi kontak yang ada')
}