// main.js
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const themeToggle = document.getElementById('themeToggle');
  const promptInput = document.getElementById('promptInput');
  const generateBtn = document.getElementById('generateBtn');
  const surpriseMeBtn = document.getElementById('surpriseMeBtn');
  const videoContainer = document.getElementById('videoContainer');

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  });

  // Example video data
  const video = { src: 'video1.mp4', alt: 'Example Video' };

  // Function to create video container
  function createVideoContainer(video) {
    const container = document.createElement('div');
    container.className = 'video-container';

    const videoElement = document.createElement('video');
    videoElement.src = video.src;
    videoElement.alt = video.alt;
    videoElement.controls = true;

    const videoControls = document.createElement('div');
    videoControls.className = 'video-controls';

    const likeButton = document.createElement('button');
    likeButton.textContent = '👍 Like';
    likeButton.addEventListener('click', () => alert('Liked!'));

    const commentButton = document.createElement('button');
    commentButton.textContent = '💬 Comment';
    commentButton.addEventListener('click', () => alert('Commented!'));

    const shareButton = document.createElement('button');
    shareButton.textContent = '🔗 Share';
    shareButton.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: 'Video Model Arena',
          text: 'Check out this video!',
          url: video.src,
        }).catch(console.error);
      } else {
        alert('Web Share API is not supported in your browser.');
      }
    });

    videoControls.appendChild(likeButton);
    videoControls.appendChild(commentButton);
    videoControls.appendChild(shareButton);

    container.appendChild(videoElement);
    container.appendChild(videoControls);
    return container;
  }

  // Load initial video into the app
  videoContainer.appendChild(createVideoContainer(video));

  // Set initial theme
  document.body.classList.add('dark');

  // Generate button functionality
  generateBtn.addEventListener('click', () => {
    const prompt = promptInput.value;
    if (prompt) {
      alert(`Generating video for prompt: ${prompt}`);
      // Implement the video generation logic here
    } else {
      alert('Please enter a prompt');
    }
  });

  // Surprise Me button functionality
  surpriseMeBtn.addEventListener('click', () => {
    const randomPrompt = 'A random surprise prompt';
    alert(`Generating video for prompt: ${randomPrompt}`);
    // Implement the surprise video generation logic here
  });
});
