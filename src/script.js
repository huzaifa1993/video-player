const player = document.querySelector('.player');
const video = document.querySelector('video');


const showControlsElement = document.createElement("div");
showControlsElement.classList.add("show-controls");
player.appendChild(showControlsElement);

const controlsContainer = document.createElement("div");
controlsContainer.classList.add("controls-container");
showControlsElement.appendChild(controlsContainer);


const progressRange = document.createElement("div");
progressRange.classList.add("progress-range");
progressRange.setAttribute('title','Seek')
controlsContainer.appendChild(progressRange);

const progressBar= document.createElement("div");
progressBar.classList.add("progress-bar");
progressRange.appendChild(progressBar);


const controlGroup= document.createElement("div");
controlGroup.classList.add("control-group");
controlsContainer.appendChild(controlGroup);

const controlLeft= document.createElement("div");
controlLeft.classList.add("controls-left");
controlGroup.appendChild(controlLeft);

const playControls= document.createElement("div");
playControls.classList.add("play-controls");
controlLeft.appendChild(playControls);

const playBtn= document.createElement("i");
playBtn.classList.add("fas","fa-play");
playBtn.setAttribute('title','play')
playBtn.setAttribute('id','play-btn')
playControls.appendChild(playBtn);

const volume= document.createElement("div");
volume.classList.add("volume");
controlLeft.appendChild(volume);

const volumeIcon= document.createElement("div");
volumeIcon.classList.add("volume-icon");
volume.appendChild(volumeIcon);


const volumeUp= document.createElement("i");
volumeUp.classList.add("fas","fa-volume-up");
volumeUp.setAttribute('title','Mute')
volumeUp.setAttribute('id','volume-icon')
volumeIcon.appendChild(volumeUp);


const volumeRange= document.createElement("div");
volumeRange.classList.add("volume-range");
volumeRange.setAttribute('title','Change-Volume')
volume.appendChild(volumeRange);


const volumeBar= document.createElement("div");
volumeBar.classList.add("volume-bar");
volumeRange.appendChild(volumeBar);



const controlsRight= document.createElement("div");
controlsRight.classList.add("controls-right");
controlGroup.appendChild(controlsRight);


const speedRate= document.createElement("div");
speedRate.classList.add("speed");
speedRate.setAttribute("title" ,"playback Rate");
controlsRight.appendChild(speedRate);


const speed= document.createElement("select");
speed.setAttribute("name" ,"playbackRate");
speed.classList.add("player-speed");
speedRate.appendChild(speed);


const optionEle= document.createElement("option");
speed.appendChild(optionEle);
optionEle.setAttribute("value" , "0.5");
optionEle.innerHTML = '0.5 x';


const optionEle1= document.createElement("option");
speed.appendChild(optionEle1);
optionEle1.setAttribute("value" , "0.75");
optionEle1.innerHTML = '0.75 x';


const optionEle2= document.createElement("option");
speed.appendChild(optionEle2);
optionEle2.setAttribute("value" , "1");
optionEle2.innerHTML = '1 x';
optionEle2.setAttribute('selected', true);


const optionEle3= document.createElement("option");
speed.appendChild(optionEle3);
optionEle3.setAttribute("value" , "1.5");
optionEle3.innerHTML = '1.5 x';


const optionEle4= document.createElement("option");
speed.appendChild(optionEle4);
optionEle4.setAttribute("value" , "2");
optionEle4.innerHTML = '2 x';



const time= document.createElement("div");
time.classList.add("time");
controlsRight.appendChild(time);



const currentTime= document.createElement("span");
currentTime.classList.add("time-elapsed");
currentTime.innerHTML ="00:00"
time.appendChild(currentTime);



const duration= document.createElement("span");
duration.classList.add("time-duration");
duration.innerHTML ="2:38"
time.appendChild(duration);



const fullscreenBtn= document.createElement("div");
fullscreenBtn.classList.add("fullscreen");
controlsRight.appendChild(fullscreenBtn);



const iEle= document.createElement("i");
iEle.classList.add("fas","fa-expand");
fullscreenBtn.appendChild(iEle);



function showPlayIcon() {
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'play');
}

function togglePlay() {
    if (video.paused) {
        video.play();
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', 'pause');
    } else {
        video.pause();
        showPlayIcon();
    }
}
video.addEventListener('ended', showPlayIcon);


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
    volumeIcon.className = '';
    if (volume > 0.7) {
        volumeIcon.classList.add('fas', 'fa-volume-up');
    } else if (volume < 0.7 && volume >0) {
        volumeIcon.classList.add('fas', 'fa-volume-down');
    } else if (volume === 0) {
        volumeIcon.classList.add('fas', 'fa-volume-off');
    }
    lastVolume = volume;
}

function toggleMute() {
    volumeIcon.className = '';
    if (video.volume) {
        lastVolume = video.volume;
        video.volume = 0;
        volumeBar.style.width = 0;
        volumeIcon.classList.add('fas', 'fa-volume-mute');
        volumeIcon.setAttribute('title', 'unmute');
    }  else {
        video.volume = lastVolume;
        volumeBar.style.width = `${lastVolume * 100}%`;
        volumeIcon.classList.add('fas', 'fa-volume-up');
        volumeIcon.setAttribute('title', 'mute');
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
    video.classList.add('video-fullscreen');
  }
  
 
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
    video.classList.remove('video-fullscreen');
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


playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
progressRange.addEventListener('click', setProgress);
volumeRange.addEventListener('click', changeVolume);
volumeIcon.addEventListener('click', toggleMute);
speed.addEventListener('change', changeSpeed);
fullscreenBtn.addEventListener('click', toggleFullscreen);