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


