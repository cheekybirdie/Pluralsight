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

    function DrawArcs() {
        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'purple';
        ctx.lineWidth = '5';

        ctx.arc(100, 100, 30, 0, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
    }

    function RenderGraphics() {
        DrawBarChart(ctx);
        //DrawArcs();
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

