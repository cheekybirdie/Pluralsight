/**
 * Created by Cindy Edwards on 5/14/2015.
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

    function DrawRectangles() {
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "blue";
        ctx.strokeWidth = 5;
        ctx.strokeRect(100, 100, 50, 50);
        ctx.fillRect(110, 110, 30, 30);
        ctx.clearRect(125, 125, 10, 10);

        DrawRoundedRect(ctx, 10, 10, 50, 75, 10);
    }

    function DrawArcs() {
        ctx.beginPath();
        ctx.arc(200, 200, 75, 0, Math.PI * 2, false);
        ctx.stroke();
    }

    function DrawCurves() {
        ctx.lineCap = 'round';
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.quadraticCurveTo(150, 200, 100, 300);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.quadraticCurveTo(50, 150, 100, 300);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(150, 50);
        ctx.bezierCurveTo(50, 100, 200, 150, 100, 250);
        ctx.stroke();
    }

    function DrawGradients() {
        var gradient = ctx.createLinearGradient(0,0,10,100);
        gradient.addColorStop(0.5, '#0088ff');
        gradient.addColorStop(1, 'purple');

        ctx.fillStyle = gradient;
        ctx.fillRect(50, 10, 200, 100);;

        ctx.fillRect(300, 10, 100, 100);;

        ctx.fillRect(300, 175, 40, 40);;

    }

    function DrawPaths() {
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.lineTo(200,400);
        ctx.lineTo(400,400);
        ctx.closePath();
        //ctx.stroke();
        //ctx.fill();

        ctx.clip();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        for (var i = 0; i < 400; i = i + 5) {
            ctx.moveTo(0, i);
            ctx.lineTo(500, i);
        }
        //ctx.closePath();
        ctx.stroke();
    }

    function DrawText() {
        var text = 'Hello World';
        //ctx.font = '40pt Arial';
        ctx.font = 'bold 20px segoe UI, sans-serif';
        ctx.textAlign = 'start';

        //ctx.strokeStyle = 'navy';
        //ctx.fillStyle = 'yellow';

        ctx.textBaseline = 'bottom';

        var textSize = ctx.measureText(text);
        ctx.strokeRect(200, 200, textSize.width, 20);

        // perform fill first for cleaner edges
        ctx.fillText(text, 200, 220);
        //ctx.strokeText(text, 50, 50);
    }

    function onClear() {
        if (confirm('Clear?')) {
            //sessionStorage.clear();
            localStorage.clear();
            var data = $("#data");
            data.html("<div>Cleared</div>");
        }
    }

    function onDelete() {
        if(confirm('Delete?')) {
            var data = $("#data");

            var key = $("#key").val();
            //sessionStorage.removeItem(key);
            localStorage.removeItem(key);
            data.html("<div>Deleted</div>");
        }
    }

    function onStorage(e) {
        var html = "<div> key: " + e.key + "<br />" +
            "old value: "  + e.oldValue + "<br />" +
            "new value: "  + e.newValue + "<br />" +
            "url: "  + e.url + "<br />" +
            "storage area: "  + e.storageArea + "<br />" +
        "</div>";

        var data = $("#data");
        data.html(html);
    }

    function onReview() {
        var data = $("#data");
        var html = "";


        /*for (var i = 0; i < sessionStorage.length; i++) {
            var key = sessionStorage.key(i);
            html += "<div>" + key + ": " + sessionStorage[key] + "</div>";
        }*/

        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            html += "<div>" + key + ": " + localStorage[key] + "</div>";
        }

        data.html(html);
    }

    function onRetrieve() {
        var data = $("#data");
        var key = $("#key").val();
//        var value = sessionStorage[key];
        var value = localStorage[key];
        data.html("<div>" + value + "</div>");
    }

    function onSave() {
        var key = $("#key").val();
        var value = $("#value").val();

        //sessionStorage[key] = value;
        localStorage[key] = value;
    }

    function RenderGraphics() {
        //DrawRectangles();
        //DrawGradients();
        //DrawPaths();
        //DrawArcs();
        //DrawCurves();
        DrawText();
    }

    function SetCanvasSize() {
        ctx.canvas.width = 500;
        ctx.canvas.height = 400;
    }

    function WireEvents() {
        $("#save").bind("click", onSave);
        $("#retrieve").bind("click", onRetrieve);
        $("#delete").bind("click", onDelete);
        $("#review").bind("click", onReview);
        $("#clear").bind("click", onClear);
        window.addEventListener('storage', onStorage);
    }

    function Init() {
        //FindTheCanvas();
        //Access2dContext();
        //SetCanvasSize();
        WireEvents();
    }

    Init();
});

