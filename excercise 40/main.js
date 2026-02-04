const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");
const speed = document.getElementById("speed");

const videos = [
  {
    title: "Sample Video 1",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Sample Video 2",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
];

let index = 0;
let isPlaying = false;

function loadVideo(videoData) {
  title.textContent = videoData.title;
  video.src = videoData.src;
}

loadVideo(videos[index]);

function playVideo() {
  video.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  isPlaying = true;
}

function pauseVideo() {
  video.pause();
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
  isPlaying = false;
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseVideo() : playVideo();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % videos.length;
  loadVideo(videos[index]);
  playVideo();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + videos.length) % videos.length;
  loadVideo(videos[index]);
  playVideo();
});

video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.width = percent + "%";

  const curMin = Math.floor(video.currentTime / 60);
  const curSec = Math.floor(video.currentTime % 60)
    .toString()
    .padStart(2, "0");
  currentTimeEl.textContent = `${curMin}:${curSec}`;

  const durMin = Math.floor(video.duration / 60);
  const durSec = Math.floor(video.duration % 60)
    .toString()
    .padStart(2, "0");
  durationEl.textContent = `${durMin}:${durSec}`;
});

progressBar.addEventListener("click", (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  video.currentTime = (clickX / width) * video.duration;
});

volume.addEventListener("input", (e) => {
  video.volume = e.target.value;
});

speed.addEventListener("change", (e) => {
  video.playbackRate = e.target.value;
});

video.addEventListener("ended", () => {
  nextBtn.click();
});
