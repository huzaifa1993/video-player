# video-player
This is a simple video player application that allows users to play and control video on their device.

Features:
Full-screen mode toggle
Simple and user-friendly interfac
Play/pause control
Volume control
Playback rate control
Progress bar

Technologies Used:
HTML, CSS, JavaScript

Styling:
-Flex box is used for the layout.
-font-family: Helvetica, sans-serif.
-primary-color: dodgerblue;
-Responsive Design: The application is optimized for different screen sizes, including desktops, laptops, tablets, and smartphones

functions:
showPlayIcon():
-this function called when the video is paused to update the play/pause button's icon.
-Replaces the "pause" icon on the play/pause button with a "play" icon.
-Sets the title attribute of the play/pause button to "play".
-This function does not take any parameters.
-it returns void.


togglePlay():
-This function is responsible for toggling the play/pause functionality of a video player.
-It checks if the video is paused.
-If the video is paused, then it plays the video and updates the play button icon to a pause icon.
-If the video is playing, it pauses the video and updates the play button icon to a play icon.
-This function does not accept any parameters.
-it returns void.

updateProgress():
-This JavaScript function is responsible for updating the progress bar on the video player interface to reflect the current playback progress of the video.
-Calculates the current position of the video playback as a percentage of the total duration.
-Sets the width style property of the progress bar element to the calculated percentage value.
-This function does not accept any parameters.
-it returns void.


 setProgress(e):
 -This function is responsible for updating the progress bar of a video player when the user clicks on the progress bar element. 
 -it sets the current time of the video to the new time.
 -It takes (e) as parameter
 -it returns void


displayTime(time):
-it is responsible for converting a time value in seconds to format of minutes and seconds.
-If the seconds are less than 10, the function adds 0 to the seconds.
-it takes (time) as parameter
-it returns a string value in the minutes:seconds format.
