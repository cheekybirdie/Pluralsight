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

    function DrawRectangle() {
        ctx.fillStyle = 'navy';
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = '5';

        // option 1
        //ctx.rect(10, 50, 100, 200);
        //ctx.stroke();
        //ctx.fill();

        // option 2
        ctx.fillRect(10, 50, 100, 200);
        ctx.strokeRect(10, 50, 100, 200);
    }

    function RenderGraphics() {
        //DrawRectangle();
        DrawBarChart(ctx);

        return;
        // draw rect
        ctx.fillStyle = 'green';
        //context.fillRect(300, 200, 200, 100);
        ctx.strokeRect(300, 200, 200, 100);


        // draw arc
        // arc(x, y, radius, startAngle, endAngle, antiClockwise)
        //context.arc(100, 100, 50, 0, 2 * Math.PI, false);
        ctx.arc(250, 250, 50, Math.PI * 0.25 , Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
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

