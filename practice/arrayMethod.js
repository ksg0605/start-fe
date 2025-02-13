//pop: 배열 뒷부분의 값 삭제
var words = ['a', 'b', 'c'];
console.log(words.pop());

//push: 배열 뒷부분에 값을 삽입
var words = ['a', 'b', 'c'];
words.push('d');
console.log(words);

//join: 배열의 모든 요소를 연결해 하나의 문자열로 만듦
var words = ['a', 'b', 'c'];
console.log(wors.join('&'));

//concat: 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열로 반환
var words = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
console.log(words.concat(numbers));

//unshift: 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
var words = ['a', 'b', 'c'];
console.log(words.unshift('z'));
console.log(words);

//shift: 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
var words = ['a', 'b', 'c'];
console.log(words.shift());
console.log(words);

//splice: 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
var words = ['a', 'b', 'c'];
console.log(words.splice(0, 1));
console.log(words);

//slice: 배열의 begin부터 end까지 (end미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
//원본 배열은 바뀌지 않습니다.
var words = ['a', 'b', 'c'];
console.log(words.slice(2));
console.log(words.slice(0, 2));
console.log(words);

//forEach: 주어진 함수를 배열 요소 각각에 대해 실행
var words = ['a', 'b', 'c'];
words.forEach(function(word) {
  console.log(word);
});

//map: 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
var words = ['a', 'b', 'c'];
var newWords = words.map(function(word) {
  return word + ' ok';
});
console.log(newWords);

//reverse: 배열의 순서를 반전
var words = ['a', 'b', 'c'];
console.log(words.reverse());

//sort: 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
//arr.sort([compareFunction])
var words = ['c', 'b', 'a'];
console.log(words.sort());

//findIndex: 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환
var words = ['a', 'b', 'c'];
var findIndex = words.findIndex(function(word){
  return word === 'a';
});
console.log(findIndex);

//every: 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
var numbers = [1, 2, 3];
var isCheck = numbers.every(function(number){
  return number < 3;
});
console.log(isCheck);

//some: 뱌열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
var numbers = [1, 2, 3];
var isCheck = numbers.some(function(number){
  return number < 3;
});
console.log(isCheck);

//filter: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
var numbers = [1, 2, 3];
var newWords = words.filter(function(word){
  return word.length === 2;
});
console.log(newWords);

