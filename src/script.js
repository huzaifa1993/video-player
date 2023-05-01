import {player, video,progressRange,progressBar,playBtn,volumeIcon,volumeRange,volumeBar,speed,currentTime,duration,fullscreenBtn} from './elements.js'

function showPlayIcon() {
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "play");
  }
function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "pause");
  } else {
    video.pause();
    showPlayIcon();
  }
}
video.addEventListener("ended", showPlayIcon);

function displayTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}

function updateProgress() {
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  currentTime.textContent = `${displayTime(video.currentTime)} /`;
  duration.textContent = `${displayTime(video.duration)}`;
}

function setProgress(e) {
  const newTime = e.offsetX / progressRange.offsetWidth;
  progressBar.style.width = `${newTime * 100}%`;
  video.currentTime = newTime * video.duration;
}

let lastVolume = 1;

function changeVolume(e) {
  let volume = e.offsetX / volumeRange.offsetWidth;
  if (volume < 0.1) {
    volume = 0;
  }
  if (volume > 0.9) {
    volume = 1;
  }
  volumeBar.style.width = `${volume * 100}%`;
  video.volume = volume;
  volumeIcon.className = "";
  if (volume > 0.7) {
    volumeIcon.classList.add("fas", "fa-volume-up");
  } else if (volume < 0.7 && volume > 0) {
    volumeIcon.classList.add("fas", "fa-volume-down");
  } else if (volume === 0) {
    volumeIcon.classList.add("fas", "fa-volume-off");
  }
  lastVolume = volume;
}

function toggleMute() {
  volumeIcon.className = "";
  if (video.volume) {
    lastVolume = video.volume;
    video.volume = 0;
    volumeBar.style.width = 0;
    volumeIcon.classList.add("fas", "fa-volume-mute");
    volumeIcon.setAttribute("title", "unmute");
  } else {
    video.volume = lastVolume;
    volumeBar.style.width = `${lastVolume * 100}%`;
    volumeIcon.classList.add("fas", "fa-volume-up");
    volumeIcon.setAttribute("title", "mute");
  }
}

function changeSpeed() {
  video.playbackRate = speed.value;
}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
  video.classList.add("video-fullscreen");
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  video.classList.remove("video-fullscreen");
}

let fullscreen = false;

function toggleFullscreen() {
  if (!fullscreen) {
    openFullscreen(player);
  } else {
    closeFullscreen();
  }
  fullscreen = !fullscreen;
}


const eventArr = [
    {
        htmlEle : playBtn,
        eventType : "click",
        func : togglePlay
    },
    {
        htmlEle : video,
        eventType : "click",
        func : togglePlay
    },
    {
        htmlEle : video,
        eventType : "timeupdate",
        func : updateProgress
    },
    {
        htmlEle : video,
        eventType : "canplay",
        func : updateProgress
    },
    {
        htmlEle : progressRange,
        eventType : "click",
        func : setProgress
    },
    {
        htmlEle : volumeRange,
        eventType : "click",
        func : changeVolume
    },
    {
        htmlEle : volumeIcon,
        eventType : "click",
        func : toggleMute
    },
    {
        htmlEle : speed,
        eventType : "change",
        func : changeSpeed
    },
    {
        htmlEle : fullscreenBtn,
        eventType : "click",
        func : toggleFullscreen
    },
   
]

eventArr.map(item => item.htmlEle.addEventListener(item.eventType, item.func))


