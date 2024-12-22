
const playButton = document.getElementById('playButton');
const videoContainer = document.getElementById('videoContainer');
const youtubeVideo = document.getElementById('youtubeVideo');

    playButton.addEventListener('click', (event) => {
        
      event.stopPropagation(); 
      videoContainer.style.display = 'block'; 
      youtubeVideo.src = "https://www.youtube.com/embed/Tj8sT_n35kI"; 
    });

    document.addEventListener('click', () => {
        videoContainer.style.display = 'none'; // Hide the video container
       
      });
      function scrollUpAndToggle() {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    
