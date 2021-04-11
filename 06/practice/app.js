// let a = 'aa';
// const b = 'bb';
// var c = '11';
// c = 33;
// // b = '11';
// console.log(a, b, c);
// // 대부분 const를 우선하여 사용함

// // es5
// var cp = 'ssully';
// // var url = 'https://1boon.kakao.com/' + cp;
// // es6
// const url = `https://1boon.kakao.com/${cp}`

// var str = 'aaaaaaaaaa \
// sssdsf';
// const s = `aaaaaaaa
// aaaaaaaaa
// dddddd`;
// console.log(str);
// console.log(s);

// function sum(x, y = 1) {
//   return x + y;
// }

// console.log(sum(1));
// caniuse.com 활용
// const arr = [1, 2, 3];

// // const newArr = arr.map(function(item){
// //   return item + 1;
// // });
// // console.log(newArr);

// const newArr2 = arr.map((item) => item + 1);
// console.log(newArr2);

// document.getElementById('box').addEventListener('click', (event) => console.log(1));

// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
// console.log(sum(1, 2, 3));

// const words = ['a', 'b'];
// const newWords = [...words];
// console.log(newWords);

// const arr1 = [3, 4, 5];
// const arr2 = [1, 2, ...arr1, 6, 7];
// console.log(arr2);

// function func(...param ) {
//   console.log(param);
// }

// func(1, 2, 3);

// function func() {
//   console.log(arguments);
// }
// func(1, 2, 3);

// const number = 1234;

// const student = {
//   number,
// };

const a = [1, 2];
const [c1, c2] = [1, 2];

console.log(a);
console.log(c1);