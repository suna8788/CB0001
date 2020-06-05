var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var hoi03 = Paper.image('../img/hoi03.png', 0, 0, 160, 160).toDefs();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

hoi03.use().transform('t105, 150').appendTo(Paper);

var redB = Paper.rect(36, 410, 120, 30).attr({
  'fill': '#f8371f',
  'rx': 8,
  'ry': 8
});
var redBT = Paper.text(75, 430, '처음으로').click(handler01).attr({
  'fill': 'white',
  'font-size': 13
});
var red = Paper.g(redB, redBT).attr({
  'cursor': 'pointer'
});
var orangeB = Paper.rect(200, 410, 120, 30).attr({
  'fill': '#fe9b00',
  'rx': 8,
  'ry': 8
});
var orangeBT = Paper.text(230, 430, '한자어 학습').click(handler02).attr({
  'fill': 'white',
  'font-size': 13
});
var orange = Paper.g(orangeB, orangeBT).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('bon_03.html');
}

function handler02() {
  location.replace('bon_03BV.html');
}
