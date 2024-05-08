const video = document.getElementById('myVideo');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const muteButton = document.getElementById('mute');
const fullscreenButton = document.getElementById('fullscreen');

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = 'Pausar';
  } else {
    video.pause();
    playButton.textContent = 'Reproducir';
  }
});

pauseButton.addEventListener('click', () => {
  video.pause();
  playButton.textContent = 'Reproducir';
});

muteButton.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    muteButton.textContent = 'Silenciar';
  } else {
    video.muted = true;
    muteButton.textContent = 'Desactivar silencio';
  }
});

fullscreenButton.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});
