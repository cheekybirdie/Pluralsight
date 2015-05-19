// JavaScript source code
$(document).ready(function () {
    var canvas;
    var context;

    function FindTheCanvas() {
        canvas = $("#myCanvas")[0];
    }

    function Access2dContext() {
        context = canvas.getContext('2d');
    }

    function RenderGraphics() {
        // draw rect
        context.fillStyle = 'green';
        //context.fillRect(300, 200, 200, 100);
        context.strokeRect(300, 200, 200, 100);


        // draw arc
        // arc(x, y, radius, startAngle, endAngle, antiClockwise)
        //context.arc(100, 100, 50, 0, 2 * Math.PI, false);
        context.arc(250, 250, 50, Math.PI * 0.25 , Math.PI, false);
        context.fillStyle = 'red';
        context.fill();
    }

    function Init() {
        FindTheCanvas();
        Access2dContext();
        RenderGraphics();
    }

    Init();
});
