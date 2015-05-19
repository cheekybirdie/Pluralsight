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

    function DrawCurves() {
        //DrawBezierCurve();
        //DrawQuadraticCurve();
        DrawRoundedRect(ctx, 50, 50, 300, 200, 20);
    }

    function DrawBezierCurve() {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.bezierCurveTo(50, 400, 400, 400, 400, 50);
        ctx.strokeStyle = "navy";
        ctx.lineWidth = 4;
        ctx.closePath();
        ctx.stroke();


        ctx.fillStyle = "yellow";
        ctx.fill();
    }

    function DrawQuadraticCurve() {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.quadraticCurveTo(275, 500, 500, 50);
        ctx.strokeStyle = "navy";
        ctx.lineWidth = 4;
        ctx.closePath();
        ctx.stroke();

        //ctx.fillStyle = "yellow";
        //ctx.fill();
    }

    function RenderGraphics() {
        DrawCurves();
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

