/**
 * Created by Cindy Edwards on 5/10/2015.
 */
// JavaScript source code
$(document).ready(function () {
    var canvas;
    var ctx;

    function drawImage(img) {
        // display the image
        var destX = 10;
        var destY = 20;
        var destWidth = 212;
        var destHeight = 212;
        ctx.drawImage(img, destX, destY, destWidth, destHeight);

        // display a portion of the image
        var sourceX = 0;
        var sourceY = 0;
        var sourceWidth = 512;
        var sourceHeight = 110;
        var destX = 250;
        var destY = 20;
        var destWidth = 212;
        var destHeight = 50;
        ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight,
            destX, destY, destWidth, destHeight);
    }

    function drawWallpaper(img) {
        var pattern = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = pattern;
        ctx.rect(50, 50, 400, 300);
        ctx.fill();
    }

    function FindTheCanvas() {
        canvas = $("#myCanvas")[0];
    }

    function Access2dContext() {
        ctx = canvas.getContext('2d');
    }

    function RenderImages() {
        var img = new Image();
        img.onload = function() {
            drawImage(img);
        };
        img.src = 'images/HTML5.png';

        var wallpaper = new Image();
        wallpaper.onload = function() {
            //drawWallpaper(wallpaper);
        };
        wallpaper.src = 'images/wallpaper.jpg';
    }

    function RenderGraphics() {
        RenderImages();
    }

    function SetCanvasSize() {
        ctx.canvas.width = 800;
        ctx.canvas.height = 600;
    }

    function showCanvasAsImage() {
        alert('showing canvas as image');
        var dataUrl = canvas.toDataURL();
        window.open(dataUrl, 'Canvas as Image', 'width=300, height=300');
        alert('showed canvas as image');
    }

    function WireEvents() {
        $("#showCanvasAsImage").bind("click", showCanvasAsImage);
    }

    function Init() {
        WireEvents();
        FindTheCanvas();
        Access2dContext();
        SetCanvasSize();
        RenderGraphics();
    }

    Init();
});

