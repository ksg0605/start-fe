var person = {
  nick: 'FE',
  age: 28,
  area: 'jeju',
  hobby: ['js', 'html'],
};

//constructor : 생성자 함수를 가르킴
obj.constructor == Object; //true

// hasOwnProperty : 객체가 프로퍼티를 소유(상속이 아닌) 하고 있는지 검사
console.log(obj.hasOwnProperty('nick'));

//toString() : 문자열로 반환, 그다지 유용하지 않는 정보 출력
alert(obj); // alert(obj.toString())

console.log(window);
var date = new Date();
Math.floor(1.4);
var patten = new RegExp('^abc');