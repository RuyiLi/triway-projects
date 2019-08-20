document.addEventListener('DOMContentLoaded', init);

const TRACK_NAMES = [
    'Ed Sheeran (Ellis Remix) - Shape Of You.mp3',
    'Kanon Wakeshima - Tsukinami.mp3',
    'Katy Perry - Never Really Over.mp3',
    'Panda Eyes - ILY.mp3',
    'Drop - Granat.mp3'
];

let tracks = [];
let currentIndex;
let currentAudio;
let playing = true;

let controlBtn, nowPlayingText, progressBar;

function init () {
    controlBtn = document.querySelector('button#control');
    nowPlayingText = document.querySelector('p#now-playing');
    progressBar = document.querySelector('progress');

    const previousBtn = document.querySelector('button#prev');
    const nextBtn = document.querySelector('button#next');
    const randomBtn = document.querySelector('button#random');

    previousBtn.addEventListener('click', previous);
    nextBtn.addEventListener('click', next);
    randomBtn.addEventListener('click', random);
    controlBtn.addEventListener('click', pauseOrPlay);

    loadTracks();
    setTimeout(playTrack, 500, 0);

    setInterval(updateProgress, 1000 / 60, 1000);
}

function updateProgress () {
    const time = currentAudio.currentTime;
    const fullDuration = currentAudio.duration;

    progressBar.value = time / fullDuration * 100;
}

function loadTracks () {
    for (const track of TRACK_NAMES) {
        const audio = new Audio('./music/' + track);
        tracks.push(audio);
    }
}

function playTrack (newIndex) {
    if (currentAudio) currentAudio.pause();

    currentAudio = tracks[ newIndex ];
    currentIndex = newIndex;
    currentAudio.load();

    controlBtn.innerText = 'Pause';
    currentAudio.play()
    playing = true;

    currentAudio.removeEventListener('ended', next);
    currentAudio.addEventListener('ended', next);

    // currentAudio.removeEventListener('timeupdate', updateProgress);
    // setTimeout(function () {
    //     currentAudio.addEventListener('timeupdate', updateProgress);
    // }, 2000);

    nowPlayingText.innerText = 'Now Playing:\n' + currentAudio.src.split('/music/')[ 1 ].replace(/%20|.mp3/g, ' ');
}

function pauseOrPlay () {
    if (playing) {
        controlBtn.innerText = 'Play';
        currentAudio.pause();
    } else {
        controlBtn.innerText = 'Pause';
        currentAudio.play();
    }

    playing = !playing;
}

function previous () {
    const newIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1;
    playTrack(newIndex);
}

function next () {
    const newIndex = currentIndex === tracks.length - 1 ? 0 : currentIndex + 1;
    playTrack(newIndex);
}

function random () {
    const newIndex = Math.floor(Math.random() * tracks.length);
    playTrack(newIndex);
}