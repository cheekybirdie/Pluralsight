/**
 * Created by Cindy Edwards on 5/10/2015.
 */
/**
 * Created by Cindy Edwards on 5/10/2015.
 */
// JavaScript source code
$(document).ready(function () {
    var canvas;
    var ctx;

    function FindTheCanvas() {
        canvas = $("#myCanvas")[0];
    }

    function Access2dContext() {
        ctx = canvas.getContext('2d');
    }

    function DrawRoundedCorners() {
        // Using arcTo for rounded corners

        // move to star position for the path
        ctx.beginPath();
        ctx.moveTo(80, 50);

        // draw top right corner
        // startX, startY, endX, endY, radius
        ctx.arcTo(210, 50, 210, 70, 20);

        // bottom right
        ctx.arcTo(210, 200, 160, 200, 20);

        // bottom left
        ctx.arcTo(60, 200, 60, 180, 20);

        // top left
        ctx.arcTo(60, 50, 100, 50, 20);

        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = '5';
        ctx.stroke();
        ctx.fill();
    }

    function RenderGraphics() {
        DrawRoundedCorners();
    }

    function SetCanvasSize() {
        ctx.canvas.width = 800;
        ctx.canvas.height = 600;
    }

    function Init() {
        FindTheCanvas();
        Access2dContext();
        SetCanvasSize();
        RenderGraphics();
    }

    Init();
});

