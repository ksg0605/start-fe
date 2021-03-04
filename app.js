console.log('app.js');

var name = 'FE';
var age = 28;
var message = 'hello' + name;

//댓글개수
var commentCount = 20;

/*
동적으로 호출한 콘텐츠를 넣어줌
@author FE
*/
document.getElementById('wrap').innerHTML = content;

var count = 5;
var nick = "my nick is 'fe'";
var homepage = 'www.kakaocorp.com';
var isMan = true;

console.log(nick == '');
console.log(!!'test'); //true

var log = function(str) {
  console.log(str);
};
function log(str) {
  console.log(str);
}

var image = {};

image.width = 1;
image.height = 2;

image['width'] = 1;

image['name' + i] = '1.jpg';

image = {width: 1, height: 2};

image = [];

image[0] = '1.jpg';
image[1] = '2.jpg';

image = ['1.jpg', 2, {name: '3.jpg' }];

var nick = null;

var nick;

console.log(1 + 2);
console.log('a' + 'b');
console.log(1 + '4');

'' == '0';
0 == '';
0 == '0';
false == 'false';
false == '0';
false == undefined;
false == null;
null == undefined;
' \t\r\n' == 0;

if (isHero && isHulk) {
  //둘 다 참일경우 실행
}

if (isHero && isHulk) {
  //하나라도 참일경우 실행
}

if (!isHero) {
  //영웅이 아니라면
}

var image = { width: 1, height: 2 };

console.log('width' in image);
console.log('size' in image);
console.log('toString' in image);

delete image.width;

image.width = null;

console.log(typeof (1 + '4'));
typeof foo !== 'undefined';

var arr = [1, 2, 3];

console.log(a instanceof Array);

