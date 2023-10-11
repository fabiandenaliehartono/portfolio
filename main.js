// Menu on scroll

let header = document.querySelector('.header');
window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
    btnMenu.classList.remove('fa-times');
    NavLinks.classList.remove('active')
}


let btnMenu = document.getElementById('btnMenu');
let NavLinks = document.querySelector('.nav-links');

btnMenu.onclick = function (){
    btnMenu.classList.toggle('fa-times');
    NavLinks.classList.toggle('active')
}
// g
    document.addEventListener("DOMContentLoaded", function() {
        const menuItems = document.querySelectorAll(".menu-portf ul li");
        const boxes = document.querySelectorAll(".box");

        menuItems.forEach(menuItem => {
            menuItem.addEventListener("click", function() {
                const filter = this.getAttribute("data-filter");

                // Sembunyikan semua kotak proyek
                boxes.forEach(box => {
                    box.style.display = "none";
                });

                // Tampilkan kotak proyek yang sesuai dengan filter
                if (filter === "all") {
                    boxes.forEach(box => {
                        box.style.display = "block";
                    });
                } else {
                    boxes.forEach(box => {
                        const boxFilter = box.querySelector("img").getAttribute("data-filter");
                        if (boxFilter === filter) {
                            box.style.display = "block";
                        }
                    });
                }

                // Hapus kelas "active" dari semua menu items
                menuItems.forEach(item => {
                    item.classList.remove("active");
                });

                // Tambahkan kelas "active" ke menu yang dipilih
                this.classList.add("active");
            });
        });
    });


const scriptURL = 'https://script.google.com/macros/s/AKfycbzvski476VVcDR9rhKEfdnjoySduB4yjXoGgVtG2iTLLWV1LZGp1H9kuTEJ4wAkNTrAew/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(Response => alert("Thank you for your message. I'll respond shortly😀"))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

// Swiper

var swiper = new Swiper(".swip-test-imo", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // add class active to link in menu by scroll

  let link = document.querySelectorAll('.nav-links a');
  let sec = document.querySelectorAll('section');

  function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 100 < sec [len].offsetTop){}
    link.forEach(ltx => ltx.classList.remove("active"));
    link[len].classList.add("active")
  }
window.addEventListener("scroll",activeMenu)
