document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const videoDisplay = document.querySelector(".video-display iframe");
    const randomButton = document.querySelector(".btn-random");
  
    // Función para actualizar el video
    function updateVideo(url) {
      if (videoDisplay) {
        videoDisplay.src = url;
      }
    }
  
    // Evento al hacer clic en cada miniatura
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", () => {
        const videoUrl = thumbnail.getAttribute("data-video");
        if (videoUrl) {
          updateVideo(videoUrl);
        }
      });
    });
  
    // Evento al hacer clic en el botón de "Sorpresa"
    randomButton.addEventListener("click", () => {
      if (thumbnails.length > 0) {
        const randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];
        const randomVideoUrl = randomThumbnail.getAttribute("data-video");
        if (randomVideoUrl) {
          updateVideo(randomVideoUrl);
        }
      }
    });
  });