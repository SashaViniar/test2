var ms = [15];
for (var i = 0; i <= 15; i++) {
    ms[i] = 0;
}
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <div className = "dispnone1">
                    <div id="my0" className = "pole pole1">Click me</div>
                    <div id="my1" className = "pole pole2">Click me</div>
                </div>
                <div className = "dispnone1">
                    <div id="my2" className = "pole pole3">Click me</div>
                    <div id="my3" className = "pole pole4">Click me</div>
                </div>
                <div className = "dispnone1">
                    <div id="my4" className = "pole pole5">Click me</div>
                    <div id="my5" className = "pole pole6">Click me</div>
                </div>
                <div className = "dispnone1">
                    <div id="my6" className = "pole pole7">Click me</div>
                    <div id="my7" className = "pole pole8">Click me</div>
                </div>
                <div className = "dispnone1">
                    <div id="my8" className = "pole pole9">Click me</div>
                    <div id="my9" className = "pole pole10">Click me</div>
                </div>
                <div className = "dispnone1">
                    <div id="my10" className = "pole pole11">Click me</div>
                    <div id="my11" className = "pole pole12">Click me</div>
                </div>
                <div className = "dispnone1">
                    <div id="my12" className = "pole pole13">Click me</div>
                    <div id="my13" className = "pole pole14">Click me</div>
                </div>
                <div className = "dispnone1">
                    <div id="my14" className = "pole pole15">Click me</div>
                    <div id="my15" className = "pole pole16">Click me</div>
                </div>
            </div>

        );
    }
});
ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);


function test1() {
    if (ms[0] + ms[1] == 2) {
        $("#my0").css("display", "none");
        $("#my1").css("display", "none");
    }
    else {
        if (ms[0] == 0) {
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[1] = ms[2] = ms[3] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole4").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[1] = ms[4] = ms[5] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[1] = ms[6] = ms[7] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[1] = ms[9] = ms[8] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[1] = ms[10] = ms[11] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[1] = ms[12] = ms[13] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[1] = ms[14] = ms[15] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
        if (ms[1] == 0) {
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[0] = ms[2] = ms[3] = 0;
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole4").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[0] = ms[4] = ms[5] = 0;
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[0] = ms[6] = ms[7] = 0;
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[0] = ms[9] = ms[8] = 0;
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[0] = ms[10] = ms[11] = 0;
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[0] = ms[12] = ms[13] = 0;
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[0] = ms[14] = ms[15] = 0;
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
    }
}


function test2() {
    if (ms[2] + ms[3] == 2) {
        $("#my2").css("display", "none");
        $("#my3").css("display", "none");
    }
    else {
        if (ms[3] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[2] = ms[0] = ms[1] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[2] = ms[4] = ms[5] = 0;
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[2] = ms[6] = ms[7] = 0;
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[2] = ms[9] = ms[8] = 0;
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[2] = ms[10] = ms[11] = 0;
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[2] = ms[12] = ms[13] = 0;
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[2] = ms[14] = ms[15] = 0;
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
        if (ms[2] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[3] = ms[0] = ms[1] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole2").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[3] = ms[4] = ms[5] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[3] = ms[6] = ms[7] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[3] = ms[9] = ms[8] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[3] = ms[10] = ms[11] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[3] = ms[12] = ms[13] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[3] = ms[14] = ms[15] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
    }
}

function test3() {
    if (ms[4] + ms[5] == 2) {
        $("#my4").css("display", "none");
        $("#my5").css("display", "none");
    }
    else {
        if (ms[5] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[4] = ms[0] = ms[1] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[4] = ms[2] = ms[3] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[4] = ms[6] = ms[7] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[4] = ms[9] = ms[8] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[4] = ms[10] = ms[11] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[4] = ms[12] = ms[13] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[4] = ms[14] = ms[15] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
        if (ms[4] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[5] = ms[0] = ms[1] = 0;
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole2").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[5] = ms[2] = ms[3] = 0;
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole4").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[5] = ms[6] = ms[7] = 0;
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[5] = ms[9] = ms[8] = 0;
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[5] = ms[10] = ms[11] = 0;
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[5] = ms[12] = ms[13] = 0;
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[5] = ms[14] = ms[15] = 0;
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }

    }
}

function test4() {
    if (ms[7] + ms[6] == 2) {
        $("#my6").css("display", "none");
        $("#my7").css("display", "none");
    }
    else {
        if (ms[7] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[6] = ms[0] = ms[1] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[6] = ms[2] = ms[3] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[6] = ms[4] = ms[5] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[6] = ms[9] = ms[8] = 0;
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[6] = ms[10] = ms[11] = 0;
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[6] = ms[12] = ms[13] = 0;
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[6] = ms[14] = ms[15] = 0;
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
        if (ms[6] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[7] = ms[0] = ms[1] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole2").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[7] = ms[2] = ms[3] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole4").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[7] = ms[4] = ms[5] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[7] = ms[9] = ms[8] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[7] = ms[10] = ms[11] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[7] = ms[12] = ms[13] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[7] = ms[14] = ms[15] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
    }
}

function test5() {
    if (ms[8] + ms[9] == 2) {
        $("#my8").css("display", "none");
        $("#my9").css("display", "none");
    }
    else {
        if (ms[9] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[8] = ms[0] = ms[1] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[8] = ms[2] = ms[3] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[8] = ms[4] = ms[5] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole9").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[8] = ms[6] = ms[7] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[8] = ms[10] = ms[11] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[8] = ms[12] = ms[13] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[8] = ms[14] = ms[15] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
        if (ms[8] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[9] = ms[0] = ms[1] = 0;
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole2").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[9] = ms[2] = ms[3] = 0;
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole4").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[9] = ms[4] = ms[5] = 0;
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[9] = ms[6] = ms[7] = 0;
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[9] = ms[10] = ms[11] = 0;
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[9] = ms[12] = ms[13] = 0;
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[9] = ms[14] = ms[15] = 0;
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
    }
}

function test6() {
    if (ms[11] + ms[10] == 2) {
        $("#my10").css("display", "none");
        $("#my11").css("display", "none");
    }
    else {
        if (ms[11] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[10] = ms[0] = ms[1] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[10] = ms[2] = ms[3] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[10] = ms[4] = ms[5] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[10] = ms[6] = ms[7] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[10] = ms[8] = ms[9] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[10] = ms[12] = ms[13] = 0;
                    $(".pole.pole14").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[10] = ms[14] = ms[15] = 0;
                    $(".pole.pole16").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole11").css("background-color", "black");
                }, 1000);
            }
        }
        if (ms[10] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[11] = ms[0] = ms[1] = 0;
                    $(".pole.pole12").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole2").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[11] = ms[2] = ms[3] = 0;
                    $(".pole.pole12").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole4").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[11] = ms[4] = ms[5] = 0;
                    $(".pole.pole12").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[11] = ms[6] = ms[7] = 0;
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[11] = ms[8] = ms[9] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[11] = ms[12] = ms[13] = 0;
                    $(".pole.pole12").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[11] = ms[14] = ms[15] = 0;
                    $(".pole.pole12").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
    }
}

function test7() {
    if (ms[12] + ms[13] == 2) {
        $("#my12").css("display", "none");
        $("#my13").css("display", "none");
    }
    else {
        if (ms[13] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[12] = ms[0] = ms[1] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[12] = ms[2] = ms[3] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[12] = ms[4] = ms[5] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[12] = ms[6] = ms[7] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[12] = ms[8] = ms[9] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[12] = ms[10] = ms[11] = 0;
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[12] = ms[14] = ms[15] = 0;
                    $(".pole.pole16").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                }, 1000);
            }
        }
        if (ms[12] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[13] = ms[0] = ms[1] = 0;
                    $(".pole.pole14").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole2").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[13] = ms[2] = ms[3] = 0;
                    $(".pole.pole14").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole4").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[13] = ms[4] = ms[5] = 0;
                    $(".pole.pole14").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[13] = ms[6] = ms[7] = 0;
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[13] = ms[8] = ms[9] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[13] = ms[10] = ms[11] = 0;
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                }, 1000);
            }
            if (ms[14] == 1 || ms[15] == 1) {
                setTimeout(function() {
                    ms[13] = ms[14] = ms[15] = 0;
                    $(".pole.pole14").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
    }
}

function test8() {
    if (ms[15] + ms[14] == 2) {
        $("#my14").css("display", "none");
        $("#my15").css("display", "none");
    }
    else {
        if (ms[15] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[14] = ms[0] = ms[1] = 0;
                    $(".pole.pole2").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[14] = ms[2] = ms[3] = 0;
                    $(".pole.pole4").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[14] = ms[4] = ms[5] = 0;
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[14] = ms[6] = ms[7] = 0;
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[14] = ms[8] = ms[9] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[14] = ms[10] = ms[11] = 0;
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[14] = ms[12] = ms[13] = 0;
                    $(".pole.pole15").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                    $(".pole.pole13").css("background-color", "black");
                }, 1000);
            }
        }
        if (ms[14] == 0) {
            if (ms[0] == 1 || ms[1] == 1) {
                setTimeout(function() {
                    ms[14] = ms[0] = ms[1] = 0;
                    $(".pole.pole16").css("background-color", "black");
                    $(".pole.pole1").css("background-color", "black");
                    $(".pole.pole2").css("background-color", "black");
                }, 1000);
            }
            if (ms[2] == 1 || ms[3] == 1) {
                setTimeout(function() {
                    ms[14] = ms[2] = ms[3] = 0;
                    $(".pole.pole16").css("background-color", "black");
                    $(".pole.pole3").css("background-color", "black");
                    $(".pole.pole4").css("background-color", "black");
                }, 1000);
            }
            if (ms[4] == 1 || ms[5] == 1) {
                setTimeout(function() {
                    ms[14] = ms[4] = ms[5] = 0;
                    $(".pole.pole16").css("background-color", "black");
                    $(".pole.pole5").css("background-color", "black");
                    $(".pole.pole6").css("background-color", "black");
                }, 1000);
            }
            if (ms[6] == 1 || ms[7] == 1) {
                setTimeout(function() {
                    ms[14] = ms[6] = ms[7] = 0;
                    $(".pole.pole7").css("background-color", "black");
                    $(".pole.pole8").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
            if (ms[8] == 1 || ms[9] == 1) {
                setTimeout(function() {
                    ms[14] = ms[8] = ms[9] = 0;
                    $(".pole.pole9").css("background-color", "black");
                    $(".pole.pole10").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
            if (ms[10] == 1 || ms[11] == 1) {
                setTimeout(function() {
                    ms[14] = ms[10] = ms[11] = 0;
                    $(".pole.pole11").css("background-color", "black");
                    $(".pole.pole12").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
            if (ms[12] == 1 || ms[13] == 1) {
                setTimeout(function() {
                    ms[14] = ms[12] = ms[13] = 0;
                    $(".pole.pole13").css("background-color", "black");
                    $(".pole.pole14").css("background-color", "black");
                    $(".pole.pole16").css("background-color", "black");
                }, 1000);
            }
        }
    }
}


$(document).ready(function() {
    $(".pole1").click(function() {
        $(".pole.pole1").css("background-color", "green");
        ms[0] = 1;
        test1();
    });
    $(".pole2").click(function() {
        $(".pole.pole2").css("background-color", "green");
        ms[1] = 1;
        test1();
    });

    $(".pole3").click(function() {
        $(".pole.pole3").css("background-color", "yellow");
        ms[2] = 1;
        test2();
    });
    $(".pole4").click(function() {
        $(".pole.pole4").css("background-color", "yellow");
        ms[3] = 1;
        test2();
    });

    $(".pole5").click(function() {
        $(".pole.pole5").css("background-color", "purple");
        ms[4] = 1;
        test3();
    });
    $(".pole6").click(function() {
        $(".pole.pole6").css("background-color", "purple");
        ms[5] = 1;
        test3();
    });

    $(".pole7").click(function() {
        $(".pole.pole7").css("background-color", "orange");
        ms[6] = 1;
        test4();
    });
    $(".pole8").click(function() {
        $(".pole.pole8").css("background-color", "orange");
        ms[7] = 1;
        test4();
    });

    $(".pole9").click(function() {
        $(".pole.pole9").css("background-color", "blue");
        ms[8] = 1;
        test5();
    });
    $(".pole10").click(function() {
        $(".pole.pole10").css("background-color", "blue");
        ms[9] = 1;
        test5();
    });

    $(".pole11").click(function() {
        $(".pole.pole11").css("background-color", "pink");
        ms[10] = 1;
        test6();
    });
    $(".pole12").click(function() {
        $(".pole.pole12").css("background-color", "pink");
        ms[11] = 1;
        test6();
    });

    $(".pole13").click(function() {
        $(".pole.pole13").css("background-color", "grey");
        ms[12] = 1;
        test7();
    });
    $(".pole14").click(function() {
        $(".pole.pole14").css("background-color", "grey");
        ms[13] = 1;
        test7();
    });


    $(".pole15").click(function() {
        $(".pole.pole15").css("background-color", "aqua");
        ms[14] = 1;
        test8();
    });
    $(".pole16").click(function() {
        $(".pole.pole16").css("background-color", "aqua");
        ms[15] = 1;
        test8();
    });


});
