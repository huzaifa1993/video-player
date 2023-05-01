export const player = document.querySelector(".player");
export const video = document.querySelector("video");

const showControlsElement = document.createElement("div");
showControlsElement.classList.add("show-controls");
player.appendChild(showControlsElement);

const controlsContainer = document.createElement("div");
controlsContainer.classList.add("controls-container");
showControlsElement.appendChild(controlsContainer);

export const progressRange = document.createElement("div");
progressRange.classList.add("progress-range");
progressRange.setAttribute("title", "Seek");
controlsContainer.appendChild(progressRange);

export const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");
progressRange.appendChild(progressBar);

const controlGroup = document.createElement("div");
controlGroup.classList.add("control-group");
controlsContainer.appendChild(controlGroup);

const controlLeft = document.createElement("div");
controlLeft.classList.add("controls-left");
controlGroup.appendChild(controlLeft);

const playControls = document.createElement("div");
playControls.classList.add("play-controls");
controlLeft.appendChild(playControls);

export const playBtn = document.createElement("i");
playBtn.classList.add("fas", "fa-play");
playBtn.setAttribute("title", "play");
playBtn.setAttribute("id", "play-btn");
playControls.appendChild(playBtn);

const volume = document.createElement("div");
volume.classList.add("volume");
controlLeft.appendChild(volume);

export const volumeIcon = document.createElement("div");
volumeIcon.classList.add("volume-icon");
volume.appendChild(volumeIcon);

const volumeUp = document.createElement("i");
volumeUp.classList.add("fas", "fa-volume-up");
volumeUp.setAttribute("title", "Mute");
volumeUp.setAttribute("id", "volume-icon");
volumeIcon.appendChild(volumeUp);

export const volumeRange = document.createElement("div");
volumeRange.classList.add("volume-range");
volumeRange.setAttribute("title", "Change-Volume");
volume.appendChild(volumeRange);

export const volumeBar = document.createElement("div");
volumeBar.classList.add("volume-bar");
volumeRange.appendChild(volumeBar);

const controlsRight = document.createElement("div");
controlsRight.classList.add("controls-right");
controlGroup.appendChild(controlsRight);

const speedRate = document.createElement("div");
speedRate.classList.add("speed");
speedRate.setAttribute("title", "playback Rate");
controlsRight.appendChild(speedRate);

export const speed = document.createElement("select");
speed.setAttribute("name", "playbackRate");
speed.classList.add("player-speed");
speedRate.appendChild(speed);

const optionEle = document.createElement("option");
speed.appendChild(optionEle);
optionEle.setAttribute("value", "0.5");
optionEle.innerHTML = "0.5 x";

const optionEle1 = document.createElement("option");
speed.appendChild(optionEle1);
optionEle1.setAttribute("value", "0.75");
optionEle1.innerHTML = "0.75 x";

const optionEle2 = document.createElement("option");
speed.appendChild(optionEle2);
optionEle2.setAttribute("value", "1");
optionEle2.innerHTML = "1 x";
optionEle2.setAttribute("selected", true);

const optionEle3 = document.createElement("option");
speed.appendChild(optionEle3);
optionEle3.setAttribute("value", "1.5");
optionEle3.innerHTML = "1.5 x";

const optionEle4 = document.createElement("option");
speed.appendChild(optionEle4);
optionEle4.setAttribute("value", "2");
optionEle4.innerHTML = "2 x";

const time = document.createElement("div");
time.classList.add("time");
controlsRight.appendChild(time);

export const currentTime = document.createElement("span");
currentTime.classList.add("time-elapsed");
currentTime.innerHTML = "00:00";
time.appendChild(currentTime);

export const duration = document.createElement("span");
duration.classList.add("time-duration");
duration.innerHTML = "2:38";
time.appendChild(duration);

export const fullscreenBtn = document.createElement("div");
fullscreenBtn.classList.add("fullscreen");
controlsRight.appendChild(fullscreenBtn);

const iEle = document.createElement("i");
iEle.classList.add("fas", "fa-expand");
fullscreenBtn.appendChild(iEle);