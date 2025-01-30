document.addEventListener("DOMContentLoaded", function () {
    // Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Check if the image is in view
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src'); // Replace with real image URL
        img.onload = () => {
          img.classList.add('loaded'); // Optional: Add a class once loaded
        };
  
        // Once the image is loaded, stop observing it
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '0px 0px 50px 0px', // Trigger loading just before the image is in view
  });
  
  // Target all images with the 'lazy-load' class
  const images = document.querySelectorAll('.lazy-load');
  images.forEach(img => {
    observer.observe(img);
  });
  
});
