class Progress {
    background = "green";
    foreground = "white";
    textColor = "black";
    width;
    height;
    time;
    delay = 0;
    is_boxShadow = false;
    is_borderRadius = false;

    constructor(background, foreground, textColor, width, height, time, delay, boxShadow, borderRadius) {
        this.background = background;
        this.foreground = foreground;
        this.textColor = textColor;
        this.width = width;
        this.height = height;
        this.time = time;
        this.delay = delay;
        this.is_boxShadow = boxShadow;
        this.is_borderRadius = borderRadius;


        $("#progress").css({
            'width': width + "px",
            'height': height + "px",
            'background': background
        });

        if (boxShadow) {
            $("#progress").css({
                'boxShadow': '0 8px 16px 0 rgba(0,0,0,.5)'
            })
        } else {
            $("#progress").css({
                'boxShadow': 'none'
            })
        }
        if (borderRadius) {
            $("#progress").css({
                'borderRadius': '10px'
            })
        } else {
            $("#progress").css({
                'borderRadius': '0px'
            })
        }


        $("#progress").append("<p id='pogg_time' style='text-align: center;line-height:" + height + "px;font-weight: bold;color: " + textColor + ";'><span id='tt_pp'></span> %</p>");
        var update = time / 100;
        var f = 0;
        setTimeout(function () {
            var x = setInterval(function () {
                var m = 100 - f;
                if (f <= 50) {
                    $("#progress").css({
                        'background': 'linear-gradient(to left,' + foreground + ' ' + m + '%,' + background + ' ' + f + '%)'
                    });
                } else {
                    $("#progress").css({
                        'background': 'linear-gradient(to right,' + background + ' ' + f + '%,' + foreground + ' ' + m + '%)'
                    });
                }


                console.log(f);
                $("#tt_pp").text(f);
                ++f;
                if (f == 101) {
                    clearInterval(x);
                }
            }, update);
        }, delay);
    }
}

/////////////////////////////////////////////
// Create By Majid kazemi 2020
// Git Hub ==> www.github.com/majidkazemi2000
/////////////////////////////////////////////