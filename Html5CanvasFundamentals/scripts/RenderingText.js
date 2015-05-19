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

    function RenderText() {
        //HelloWorld();
        //IncreaseFontSize();
        TransformText();
    }

    function HelloWorld() {
        var text = 'Hello World';
        ctx.font = '40pt Arial';

        ctx.strokeStyle = 'navy';
        ctx.fillStyle = 'yellow';

        // perform fill first for cleaner edges
        ctx.fillText(text, 50, 50);
        ctx.strokeText(text, 50, 50);

        return;

        ctx.lineWidth = '5';
        //ctx.stroke();
        //ctx.fill();
    }

    function IncreaseFontSize() {
        var fontSize = 5;

        for (var i = 5; i <= 25; i+=5) {
            fontSize += 5;
            var text = 'Canvas Text!  ' + fontSize;
            ctx.font = fontSize + 'px Arial';
            var y = ctx.measureText(text).width;
            ctx.fillText(text, 10, y);
        }
    }

    function TransformText() {
        var regularText = 'Regular Text';
        ctx.font = '30pt Arial';
        ctx.fillText(regularText, 100, 50);

        // save context state
        ctx.save();

        // remap origin to 100, 300
        ctx.translate(100, 300);
        ctx.rotate(-0.5 * Math.PI);
        var rotatedText = 'Rotated Text';
        ctx.fillText(rotatedText, 0, 0);

        // restore the context to the non-rotated, non-translated state
        ctx.restore();

        var rotatedTextWidth = ctx.measureText(rotatedText).width;
        ctx.fillStyle = 'green';
        ctx.fillText(regularText, 100, rotatedTextWidth + 120);
    }

    function RenderGraphics() {
        RenderText();
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

