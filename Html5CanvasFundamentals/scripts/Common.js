/**
 * Created by Cindy Edwards on 5/10/2015.
 */
function DrawBarChart(ctx) {
    var scores = [100, 90, 85, 45, 72, 88];
    var width = 50;
    var currX = 50;
    var base = 200; // y location of bar bottom
    var lastX = -1;
    var lastY = -1;

    for (var i=0; i < scores.length; i++) {
        var score = scores[i];
        ctx.fillStyle = GetScoreColor(score);

        var currY = base - score;

        // draw rectangular bar
        ctx.strokeStyle = 'black';
        ctx.lineWidth = '2';
        ctx.fillRect(currX, currY, width, score);
        ctx.strokeRect(currX, currY, width, score);

        // draw circle at midpoint
        ctx.fillStyle = 'navy';
        ctx.strokeStyle = 'cyan';
        ctx.lineWidth = '3';
        ctx.beginPath();
        ctx.arc(currX + (width/2), currY, 10, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if (lastX != -1) {
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 1;
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currX + (width/2) - 10, currY);
            ctx.stroke();
            ctx.closePath();
        }

        lastX = currX + (width/2) + 10;
        lastY = currY;

        // set space for next bar
        currX += width + 5;
    }
}

function DrawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.fill();
}

function GetScoreColor(score) {
    if (score >= 90) {
        return 'green';
    }

    if (score >= 70) {
        return 'orange';
    }

    return 'red';
}
