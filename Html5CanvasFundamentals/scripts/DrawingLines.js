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

    function DrawTriangles() {
        DrawTriangle(150, 50, 150, 200, 'red', 'butt', 'butt');
        DrawTriangle(400, 50, 150, 200, 'green', 'round', 'round');
    }

    function DrawTriangle(x, y, width, height, strokeStyle, lineJoin, lineCap) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - (width/2) , y + height);
        ctx.lineTo(x + (width/2) , y + height);
        ctx.lineTo(x, y);
        ctx.closePath(); // return to the beginPath point

        ctx.lineJoin = lineJoin; // miter is the default
        //ctx.miterLimit = '1'; // miter length is the distance between the inner and outer corner where 2 lines meet
        ctx.lineCap = lineCap;

        ctx.stroke();

        ctx.fillStyle = 'yellow';
        ctx.fill();
    }

    function RenderGraphics() {
        DrawTriangles();
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

