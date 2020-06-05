// 나등급 1세트 자원보기
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var audio = Paper.image('../img/audio.png', 0, 0, 45, 45).toDefs();
var gong01 = Paper.image('../img/gong01.png', 0, 0, 70, 70).toDefs();
var gong02 = Paper.image('../img/gong02.png', 0, 0, 70, 70).toDefs();
var gong03 = Paper.image('../img/gong03.png', 0, 0, 70, 70).toDefs();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});


// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
    'fill': '#d3e7b9'
});

topBox.rect(11, 6, 32, 28).click(handlerBon).attr({
    'fill': '#d3e7b9',
    'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
    topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).click(handlerBon).attr({
        'stroke': 'black',
        'cursor': 'pointer'
    });
}

topBox.text(305, 27, '나 01').attr({
    'font-size': 18
});

function handlerBon() {
    location.replace('bon_03.html');
}


// 지시문 부분
var topArea = Paper.g();

audio.use().transform('t20, 60').appendTo(topArea).click(handler01).attr({
    'cursor':'pointer'
});

topArea.text(75, 93, '#장인 #도구').attr({
    'font-size': 20,
    'fill': 'blue'
});

function handler01() {
    var audio1 = new Audio('../aud/gong01.wav');
    audio1.play();
}


// 학습 부분
var bottomArea = Paper.g();

var gong01 = gong01.use().transform('t130, 120').appendTo(bottomArea).attr({
    'visibility': 'hidden'
});
var tri01 = bottomArea.path('M150 210 L165 230 L180 210 Z').attr({
    'fill': 'none'
});
setTimeout(function() {
    gong01.click(handler02).attr({
        'visibility': 'visible',
        'cursor': 'pointer'
    });
    tri01.attr({
        'fill': '#EABBD6'
    });

    function handler02() {
        var audio2 = new Audio('../aud/gong02.wav');
        audio2.play();
    }

}, 2000);

var gong02 = gong02.use().transform('t135, 250').appendTo(bottomArea).attr({
    'visibility': 'hidden'
});
var tri02 = bottomArea.path('M150 340 L165 360 L180 340 Z').attr({
    'fill': 'none'
});
setTimeout(function() {
    gong02.attr({
        'visibility': 'visible'
    });
    tri02.attr({
        'fill': '#EABBD6'
    });
}, 4000);

var gong03 = gong03.use().transform('t135, 380').appendTo(bottomArea).attr({
    'visibility': 'hidden'
});
var tri03 = bottomArea.path('M150 465 L165 485 L180 465 Z').attr({
    'fill': 'none'
});
setTimeout(function() {
    gong03.attr({
        'visibility': 'visible'
    });
    tri03.attr({
        'fill': '#EABBD6'
    });
}, 6000);

var gong04 = bottomArea.text(130, 575, '工').attr({
    'font-family': 'notosans',
    'font-size': 80,
    'fill': 'none'
});
setTimeout(function() {
    gong04.click(handler03).attr({
        'fill': 'black',
        'cursor':'pointer'
    });

    function handler03() {
        var audio3 = new Audio('../aud/gong03.wav');
        audio3.play();
    }


}, 8000);


// 하단 버튼
bottomArea.rect(250, 585, 80, 40, 10).attr({
    'fill': '#EAFF9A',
    'stroke':'#BDB76B'
});

bottomArea.text(263, 610, '카드 보기').click(handlerOri).attr({
    'font-size': 16,
    'cursor': 'pointer',
    'font-weight': 'bold'
});

function handlerOri() {
    location.replace('bon_03BC-04.html');
}
