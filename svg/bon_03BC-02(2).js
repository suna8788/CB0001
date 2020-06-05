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


// 본문
Paper.text(180, 70, '2 / 5').attr({
    'fill': 'gray',
    'font-size': 15,
    'text-anchor': 'middle'
});

var body = Paper.g().click(handler);
body.rect(45, 110, 270, 420, 10).attr({
    'fill': 'LemonChiffon',
    'stroke': 'gray',
    'opacity': 0.7
});
var bodyT = body.text(120, 270, ['활', '궁']).attr({
    'font-size': 60
});
bodyT.selectAll('tspan')[1].attr({
    x: 190,
    'fill': 'tomato'
});
body.text(180, 370, '총 3획,').attr({
    'font-size': 30,
    'text-anchor': 'middle'
});

body.text(180, 415, '弓부 0획').attr({
    'font-size': 30,
    'text-anchor': 'middle'
});

body.rect(138, 475, 80, 40, 10).attr({
    'fill': '#EAFF9A',
    'stroke': '#BDB76B'
});

body.text(150, 500, '자원 보기').click(handlerOri).attr({
    'font-size': 16,
    'cursor': 'pointer',
    'font-weight': 'bold'
});

function handlerOri() {
    location.replace('ori_02.html');
}

function handler() {
    this.addClass('flipCard');
    setTimeout(function() {
        location.replace('bon_03BC-02.html');
    }, 1000);
}

Paper.rect(5, 580, 350, 50).attr({
    'fill': '#e5e5e5'
});
var voca01 = Paper.text(15, 615, ['弓', '手', '(궁수)', ': 활 쏘는 일을 맡아 하는 군사']).attr({
    'font-size': 23
});
voca01.selectAll('tspan')[1].attr({
    x: 36,
    'fill': 'tomato'
});
voca01.selectAll('tspan')[2].attr({
    x: 59,
    y: 612,
    'font-size': 13
});
voca01.selectAll('tspan')[3].attr({
    x: 91,
    y: 612,
    'font-size': 13
});

Paper.path('M30,285 L10,300 L30,315').click(handlerPre).attr({
    'stroke': '#e4e7ea',
    'fill': '#bbbbbb'
});

function handlerPre() {
    location.replace('bon_03BC-01(2).html');
}

Paper.path('M330,285 L350,300 L330,315').click(handlerAft).attr({
    'stroke': '#e4e7ea',
    'fill': '#bbbbbb'
});

function handlerAft() {
    location.replace('bon_03BC-03(2).html');
}
