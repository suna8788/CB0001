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
Paper.text(180, 70, '1 / 5').attr({
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
var bodyT = body.text(90, 270, ['화살', '시']).attr({
  'font-size': 60
});
bodyT.selectAll('tspan')[1].attr({
  x: 215,
  'fill': 'tomato'
});

body.text(180, 370, '총 5획,').attr({
  'font-size': 30,
  'text-anchor': 'middle'
});

body.text(180, 415, '矢부 0획').attr({
  'font-size': 30,
  'text-anchor': 'middle'
});

body.rect(138, 475, 80, 40, 10).attr({
    'fill': '#EAFF9A',
    'stroke':'#BDB76B'
});

body.text(150, 500, '자원 보기').click(handlerOri).attr({
    'font-size': 16,
    'cursor':'pointer',
    'font-weight':'bold'
});

function handlerOri() {
    location.replace('ori_01.html');
}

function handler() {
  this.addClass('flipCard');
  setTimeout(function() {
    location.replace('bon_03BC-01.html');
  }, 1000);
}

Paper.path('M30,285 L10,300 L30,315').click(handlerPre).attr({
  'stroke': '#e4e7ea',
  'fill': '#bbbbbb'
});

function handlerPre() {
  location.replace('bon_03BC.html');
}

Paper.path('M330,285 L350,300 L330,315').click(handlerAft).attr({
  'stroke': '#e4e7ea',
  'fill': '#bbbbbb'
});

function handlerAft() {
  location.replace('bon_03BC-02(2).html');
}
