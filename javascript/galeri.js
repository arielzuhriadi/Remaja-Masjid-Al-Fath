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



// content

const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')
const img5 = document.getElementById('img5')
const img6 = document.getElementById('img6')
const img7 = document.getElementById('img7')
const img8 = document.getElementById('img8')
const img9 = document.getElementById('img9')
const img10 = document.getElementById('img10')


// Tambahkan event listener untuk klik tombol
img1.addEventListener('click', () => {
    // Toggle kelas 'zoomed' pada gambar
    img1.classList.toggle('zoomed');
  
    // Ganti teks tombol sesuai kondisi
    if (img1.classList.contains('zoomed')) {
      img1.textContent = 'Kecilkan Gambar';
    } else {
      img1.textContent = 'Perbesar Gambar';
    }
  });