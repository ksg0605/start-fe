// console.log('app');



// // Create
// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos);

// // Read

// todos.forEach(function(todo){

//   console.log(todo)
// });

// // Update
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//   return todo === updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos);

// var todos = ['운동', '게임'];
// var updateTodo = '게임';

// var newTodos = todos.map(function(todo) {
//   if (todo === updateTodo) {
//     return '공부';
//   }
//   return todo;
// });

// console.log(newTodos);

// Delete
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);

// var isMan = false;
// if (isMan) {
//   console.log('1');
// } else if (!isMan && isHero){

// } else {
//   console.log('2');
// }

// var count = [10,20,30,40,50,60,70,100];
// // count.values()
// // var sum = 0;
// // count.forEach(function(count) {
// //   sum += count;
// // })

// function avg(x) {
//   var sum = 0;
//   len = count.length;
//   count.forEach(function(x) {
//     sum += x;
//   })
//   return sum/len;  
// }
// console.log(avg(count));

// for (var low = 1; low < 10; low++) {
//   console.log(low + '단');
//   for (var col = 1; col < 10; col++) {
//     console.log(low + 'x' + col + '=' + low * col);
//   }
// }

// var x = 9;
// var y = 9;

// function timesTable(x, y) {
//   for (var low = 1; low < x+1; low++) {
//     console.log(low + '단');
//     for (var col = 1; y <= 10; col++) {
//       return console.log(low + 'x' + col + '=' + low * col);
//     }
//   }
// }

// timesTable(x, y);

// alert("안녕하세요");

// window.alert("1");

// var who = prompt("당신은 누구세요");
// console.log(who);

// var isDelete = confirm('정말 삭제하시겠습니까?');
// console.log(isDelete);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// var car = {
//   year: '2014',
//   starting: function() {
//     console.log('starting..');
//   },
// };

// car.starting();

// function sum(x, y) {
//   if (!y) y = 1;
//   console.log(x + y);
// }
// sum(3);

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /abc/; // 찾을 문자열
// var result = testReg.test(text);

// console.log(result); // true

// function timesTable(x, y) {
//   for (var low = 1; low < x + 1; low++) {
//     console.log(low + '단');
//     for (var col = 1; col < y + 1; col++) {
//       console.log(low + 'x' + col + '=' + low * col);
//     }
//   }
// }

// timesTable(9, 9);

var sum = 0;
var num = Number(window.prompt('더할 숫자를 입력해주세요!'));
sum += num
while (num) {
  var num = Number(window.prompt('더할 숫자를 입력해주세요!'));
  sum += num
}
alert("숫자의 총 합은: " + sum);