/**
 * Created by Cindy Edwards on 5/10/2015.
 */
// JavaScript source code
$(document).ready(function () {
    var canvas;
    var ctx;
    var video;
    var timerId;

    function drawImage() {
        // display the image
        ctx.drawImage(video, 5, 5, 270, 125);
    }

    function RenderImages() {
        var img = new Image();
        img.onload = function() {
            drawImage(img);
        };
        img.src = 'images/HTML5.png';
    }

    function FindTheCanvas() {
        canvas = $("#myCanvas")[0];
    }

    function FindTheVideo() {
        video = $("#video")[0];
    }

    function Access2dContext() {
        ctx = canvas.getContext('2d');
    }

    function onVideoEnded() {
        stopTimer();
    }

    function onVideoPause() {
        stopTimer();
    }

    function onVideoPlay() {
        video.currentTime = 2.0; // jump ahead 2.0 seconds
        startTimer();
    }

    function RenderGraphics() {
        RenderImages();
    }

    function SetCanvasSize() {
        ctx.canvas.width = 800;
        ctx.canvas.height = 600;
    }

    function startTimer() {
        timerId = setInterval(drawImage, 30);
    }

    function stopTimer() {
        clearInterval(timerId);
    }

    function WireEvents() {
        $("#video").bind("play", onVideoPlay);
        $("#video").bind("pause", onVideoPause);
        $("#video").bind("ended", onVideoEnded);
    }

    function Init() {
        FindTheCanvas();
        FindTheVideo();
        Access2dContext();
        SetCanvasSize();
        WireEvents();
        RenderGraphics();
    }

    Init();
});

