// 한자어 학습(1)
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
    'stroke': 'gray',
    'fill': 'none'
});


// 메뉴 박스
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


// 한자어 학습 부분
var bottomArea = Paper.g();

bottomArea.circle(180, 150, 50).click(handler01).attr({
    'fill': '#FFA407',
    'cursor':'pointer'
});

bottomArea.text(160, 170, '弓').click(handler01).attr({
    'font-family': 'notosans',
    'font-size': 50,
    'cursor':'pointer'
});

function handler01() {
    var audio1 = new Audio('../aud/gung03.wav');
    audio1.play();
}

bottomArea.line(180, 200, 180, 260).attr({
    'stroke': 'black'
});

bottomArea.rect(140, 260, 80, 60, 6).attr({
    'fill': '#86B2FF',
    'opacity': 0.5
});

bottomArea.text(160, 300, '弓手').click(handler02).attr({
    'font-family': 'notosans',
    'font-size': 26,
    'cursor':'pointer'
});

function handler02() {
    var audio2 = new Audio('../aud/voca01.wav');
    audio2.play();
}

var t1 = bottomArea.text(20, 420, ['·', '弓手', '는 날카로운 화살로', '적을 쏘았습니다.']).attr({
    'font-family': 'notosans',
    'font-size': 20
});

t1.selectAll('tspan')[1].attr({
    'fill': 'red',
    x: 50,
    'font-size': 28,
    'font-weight':'bold'
});

t1.selectAll('tspan')[2].attr({
    x: 115,
});

t1.selectAll('tspan')[3].attr({
    x: 45,
    y: 460,
});

var r1 = bottomArea.rect(35, 390, 70, 40, 6).attr({
    'fill': '#86B2FF'
});

var q1 = bottomArea.text(65, 420, '?').attr({
    'fill': 'black',
    'font-size': 24,
    'font-weight':'bold'
});

var rq1 = bottomArea.g(r1, q1).click(handler03).attr({
    'cursor': 'pointer'
});

function handler03() {
    rq1.attr({
        'display':'none'
    });
}


// 앞뒤 전환 버튼
bottomArea.path('M30,585 L10,600 L30,615').click(handlerPre).attr({
    'stroke': '#e4e7ea',
    'fill': '#bbbbbb',
    'cursor': 'pointer'
});

function handlerPre() {
    location.replace('bon_03BV.html');
}

bottomArea.path('M330,585 L350,600 L330,615').click(handlerAft).attr({
    'stroke': '#e4e7ea',
    'fill': '#bbbbbb',
    'cursor': 'pointer'
});

function handlerAft() {
    location.replace('bon_03BV-02.html');
}
