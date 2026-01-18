function esJoinAlert() {
  alert("Welcome to ES Power Gym! Let's start your transformation 💪");
}
// ================================
// GALLERY MODAL JS
// ================================
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const modal = document.createElement("div");
  modal.id = "galleryModal";
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" id="modalImg">
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");

  galleryItems.forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal kur klikoj jashtë imazhit
  modal.addEventListener("click", function(e) {
    if(e.target === modal){
      modal.style.display = "none";
    }
  });
});


document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if (hash.startsWith('#')) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

