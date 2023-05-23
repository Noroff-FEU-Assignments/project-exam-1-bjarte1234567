const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const carousel = button.closest("[data-carousel]");
    const slides = carousel.querySelector("[data-slides]");
    const allSlides = [...slides.children];
    const visibleSlides = 4; // Number of visible slides at a time
    let activeIndex = allSlides.findIndex((slide) => slide.dataset.active === "true");
    let newIndex = activeIndex + offset * visibleSlides;

    // Adjust newIndex to wrap around if it exceeds the slide range
    if (newIndex < 0) {
      newIndex = allSlides.length - visibleSlides;
    } else if (newIndex >= allSlides.length) {
      newIndex = 0;
    }

    // Show the next or previous set of slides
    allSlides.forEach((slide) => {
      slide.style.display = "none";
      slide.dataset.active = "false";
    });

    for (let i = newIndex; i < newIndex + visibleSlides; i++) {
      if (allSlides[i]) {
        allSlides[i].style.display = "block";
        allSlides[i].dataset.active = "true";
      }
    }
  });
});



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Close the modal when the user clicks on <span> (x)
var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when the user clicks outside the modal content
var modalContainer = document.getElementsByClassName("modal")[0];
modalContainer.onclick = function(event) {
  if (event.target == modalContainer || event.target == modalContainer.children[0]) {
    modal.style.display = "none";
  }
}


