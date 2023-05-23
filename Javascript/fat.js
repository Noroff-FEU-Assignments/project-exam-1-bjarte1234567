document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL hash
    let hash = window.location.hash;
  
    // Show only the corresponding section based on the URL hash
    if (hash) {
      let sectionId = hash.substring(1); // Remove the '#' character
  
      // Hide all sections except the one with the corresponding ID
      let sections = document.getElementsByClassName("fat-section");
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].id === sectionId) {
          sections[i].style.display = "block";
        } else {
          sections[i].style.display = "none";
        }
      }
    }
  });
  
  
