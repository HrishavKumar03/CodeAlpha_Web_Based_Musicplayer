document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const volumeControl = document.getElementById('volume');
    const thumbnail = document.getElementById('thumbnail');
    const playlist = document.getElementById('playlist');

    let isPlaying = false;
    let currentTrack = 0;

    const tracks = [
        { src: 'song1.mp3', thumbnail: 'thumb1.jpg' },
        { src: 'song2.mp3', thumbnail: 'thumb2.jpg' },
        { src: 'song3.mp3', thumbnail: 'thumb3.jpg' }
    ];

    function loadTrack(index) {
        audio.src = tracks[index].src;
        thumbnail.src = tracks[index].thumbnail;
    }

    function playTrack() {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    }

    function pauseTrack() {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    }

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    prevButton.addEventListener('click', () => {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrack);
        playTrack();
    });

    nextButton.addEventListener('click', () => {
        currentTrack = (currentTrack + 1) % tracks.length;
        loadTrack(currentTrack);
        playTrack();
    });

    volumeControl.addEventListener('input', (e) => {
        audio.volume = e.target.value;
    });

    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = `Track ${index + 1}`;
        li.addEventListener('click', () => {
            currentTrack = index;
            loadTrack(currentTrack);
            playTrack();
        });
        playlist.appendChild(li);
    });

    loadTrack(currentTrack);
});
