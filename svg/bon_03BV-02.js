// 한자어 도입 페이지
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

bottomArea.circle(180, 110, 50).click(handler01).attr({
    'fill': '#FFA407',
    'cursor': 'pointer'
});

bottomArea.text(160, 130, '工').click(handler01).attr({
    'font-family': 'notosans',
    'font-size': 50,
    'cursor': 'pointer'
});

function handler01() {
    var audio1 = new Audio('../aud/gong03.wav');
    audio1.play();
}

bottomArea.line(130, 100, 70, 140).attr({
    'stroke': 'black'
});
bottomArea.rect(25, 140, 80, 60, 6).click(handler02).attr({
    'fill': '#86B2FF',
    'opacity': 0.5,
    'cursor': 'pointer'
});
bottomArea.text(43, 180, '木工').click(handler02).attr({
    'font-family': 'notosans',
    'font-size': 26,
    'cursor': 'pointer'
});

function handler02() {
    var audio2 = new Audio('../aud/voca02.wav');
    audio2.play();
}

bottomArea.line(155, 153, 110, 230).attr({
    'stroke': 'black'
});
bottomArea.rect(70, 230, 80, 60, 6).click(handler03).attr({
    'fill': '#86B2FF',
    'opacity': 0.5,
    'cursor': 'pointer'
});
bottomArea.text(90, 270, '石工').click(handler03).attr({
    'font-family': 'notosans',
    'font-size': 26,
    'cursor': 'pointer'
});

function handler03() {
    var audio3 = new Audio('../aud/voca03.wav');
    audio3.play();
}

bottomArea.line(230, 110, 290, 140).attr({
    'stroke': 'black'
});
bottomArea.rect(250, 140, 80, 60, 6).click(handler04).attr({
    'fill': '#86B2FF',
    'opacity': 0.5,
    'cursor': 'pointer'
});
bottomArea.text(270, 180, '手工').click(handler04).attr({
    'font-family': 'notosans',
    'font-size': 26,
    'cursor': 'pointer'
});

function handler04() {
    var audio4 = new Audio('../aud/voca04.wav');
    audio4.play();
}

bottomArea.line(205, 153, 240, 230).attr({
    'stroke': 'black'
});
bottomArea.rect(200, 230, 80, 60, 6).click(handler05).attr({
    'fill': '#86B2FF',
    'opacity': 0.5,
    'cursor': 'pointer'
});
bottomArea.text(220, 270, '人工').click(handler05).attr({
    'font-family': 'notosans',
    'font-size': 26,
    'cursor': 'pointer'
});

function handler05() {
    var audio5 = new Audio('../aud/voca05.wav');
    audio5.play();
}

var t1 = bottomArea.text(15, 370, ['*', '木工', '은 나무로 책상을 만들었습니다.']).attr({
    'font-family': 'notosans',
    'font-size': 18
});

t1.selectAll('tspan')[1].attr({
    'fill': 'red',
    x: 40,
    'font-size': 28,
    'font-weight': 'bold'
});

t1.selectAll('tspan')[2].attr({
    x: 100,
});

var r1 = bottomArea.rect(40, 340, 50, 40, 6).attr({
    'fill': '#86B2FF'
});

var q1 = bottomArea.text(60, 370, '?').attr({
    'fill': 'black',
    'font-size': 24,
    'font-weight': 'bold'
});

var rq1 = bottomArea.g(r1, q1).click(handler06).attr({
    'cursor': 'pointer'
});

function handler06() {
    rq1.attr({
        'display': 'none'
    });
}

var t2 = bottomArea.text(15, 430, ['*', '石工', '은 바위에 조각하기 시작했습니다.']).attr({
    'font-family': 'notosans',
    'font-size': 18
});

t2.selectAll('tspan')[1].attr({
    'fill': 'red',
    x: 40,
    'font-size': 28,
    'font-weight': 'bold'
});

t2.selectAll('tspan')[2].attr({
    x: 100,
});

var r2 = bottomArea.rect(40, 400, 50, 40, 6).attr({
    'fill': '#86B2FF'
});

var q2 = bottomArea.text(60, 430, '?').attr({
    'fill': 'black',
    'font-size': 24,
    'font-weight': 'bold'
});

var rq2 = bottomArea.g(r2, q2).click(handler07).attr({
    'cursor': 'pointer'
});

function handler07() {
    rq2.attr({
        'display': 'none'
    });
}

var t3 = bottomArea.text(15, 490, ['* 이 빗은 손 정성이 깃든', '手工', ' 제품입니다.']).attr({
    'font-family': 'notosans',
    'font-size': 18
});

t3.selectAll('tspan')[1].attr({
    'fill': 'red',
    x: 200,
    'font-size': 28,
    'font-weight': 'bold'
});

t3.selectAll('tspan')[2].attr({
    x: 255
});

var r3 = bottomArea.rect(200, 460, 50, 40, 6).attr({
    'fill': '#86B2FF'
});

var q3 = bottomArea.text(220, 490, '?').attr({
    'fill': 'black',
    'font-size': 24,
    'font-weight': 'bold'
});

var rq3 = bottomArea.g(r3, q3).click(handler08).attr({
    'cursor': 'pointer'
});

function handler08() {
    rq3.attr({
        'display': 'none'
    });
}

var t4 = bottomArea.text(15, 550, ['*', '人工', ' 위성은 지구 주위를 돌고 있습니다.']).attr({
    'font-family': 'notosans',
    'font-size': 18
});

t4.selectAll('tspan')[1].attr({
    'fill': 'red',
    x: 40,
    'font-size': 28,
    'font-weight': 'bold'
});

t4.selectAll('tspan')[2].attr({
    x: 90
});

var r4 = bottomArea.rect(40, 520, 50, 40, 6).attr({
    'fill': '#86B2FF'
});

var q4 = bottomArea.text(60, 550, '?').attr({
    'fill': 'black',
    'font-size': 24,
    'font-weight': 'bold'
});

var rq4 = bottomArea.g(r4, q4).click(handler09).attr({
    'cursor': 'pointer'
});

function handler09() {
    rq4.attr({
        'display': 'none'
    });
}

// 앞뒤 전환 버튼
bottomArea.path('M30,585 L10,600 L30,615').click(handlerPre).attr({
    'stroke': '#e4e7ea',
    'fill': '#bbbbbb',
    'cursor': 'pointer'
});

function handlerPre() {
    location.replace('bon_03BV-01.html');
}

bottomArea.path('M330,585 L350,600 L330,615').click(handlerAft).attr({
    'stroke': '#e4e7ea',
    'fill': '#bbbbbb',
    'cursor': 'pointer'
});

function handlerAft() {
    location.replace('bon_03BV-03.html');
}
