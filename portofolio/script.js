// Play sound on button click
document.getElementById('play-sound').addEventListener('click', () => {
    const audio = new Audio('mixkit-melodical-flute-music-notification-2310 (1).wav');
    audio.play();
});

// Open video in modal
function openVideo(card) {
    const video = card.querySelector('video source').getAttribute('src');
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.setAttribute('src', video);
    document.getElementById('videoModal').style.display = 'flex';
}

// Close video modal
function closeVideo() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.pause();
    modalVideo.removeAttribute('src'); // Stops video playback
}
