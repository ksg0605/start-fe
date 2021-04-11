// 함수 호출 부분
clickRed();
clickBtn();
clickDeleteBtn();
clickTextBtn();
clickResetBtn();
clickToggleBtn();
clickImageBtn();


// 문제1 : .add-red 클릭하면 .box class속성에 .red를 추가
function clickRed() {
  const clickedRed = document.querySelector('.add-red');
  clickedRed.addEventListener('click', function() {
    const addBoxToClass = document.querySelectorAll('.box');
   for (var i=0; i<addBoxToClass; i++) {
      addBoxToClass[i].classList.add('red');
    }
  });
}

// 문제2 : .add-btn 클릭하면 .box 엘리먼트를 body 에 하나씩 추가
function clickBtn() {
  const clickedBtn = document.querySelector('.add-btn');
  clickedBtn.addEventListener('click', function() {
    const addBoxToBody = document.createElement('div');
    addBoxToBody.classList.add('box');
    document.body.appendChild(addBoxToBody);
  });
}

// 문제3 : .delete-btn 클릭하면 모든 .box 엘리먼트를 하나씩 삭제
function clickDeleteBtn() {
  const clickedDeleteBtn = document.querySelector('.delete-btn');
  clickedDeleteBtn.addEventListener('click', function() {
    const deleteBoxElement = document.querySelector('.box');
    deleteBoxElement.remove();
  });
}

// 문제4 : .text-btn 클릭하면 .txt에 value값을 가져와서 .box에 가져온 value값 텍스트 추가
// .box 엘리먼트가 여러개 있을경우 동일하게 추가
function clickTextBtn() {
  const clickedTextBtn = document.querySelector('.text-btn');
  clickedTextBtn.addEventListener('click', function() {
    const addTextToBox = document.querySelectorAll('.box');
    const textContents = document.querySelector('.txt');
    for (var i=0; i<addTextToBox.length; i++) {
      addTextToBox[i].innerHTML = textContents.value;
    }
  });
}

// 문제5 : .reset-btn 클릭하면 모든 .box 엘리먼트 제거
function clickResetBtn() {
  const clickedResetBtn = document.querySelector('.reset-btn');
  clickedResetBtn.addEventListener('click', function() {
    const removeAllBox = document.querySelectorAll('.box');
    for (var i=0; i<removeAllBox.length; i++){
      removeAllBox[i].remove();
    }
  });
}

// 문제6 : .toggle-btn 클릭하면 .box 엘리먼트 숨기고 다시 클릭하면 보이게 토글버튼 처리면
function clickToggleBtn() {
  const clickedToggleBtn = document.querySelector('.toggle-btn');
  clickedToggleBtn.addEventListener('click', function() {
    const hideBoxElement = document.querySelectorAll('.box');
    if (hideBoxElement[0].style.visibility == 'visible')
      for (var i = 0; i < hideBoxElement.length; i++) {
        hideBoxElement[i].style.visibility = 'hidden';
      } 
    else
      for (var i = 0; i < hideBoxElement.length; i++) {
        hideBoxElement[i].style.visibility = 'visible';
      }
  });
}

// 문제7 : .image-btn 클릭하면 .box 엘리먼트에 이미지 출력
// 이미지 주소: https://i.imgur.com/69NjYBH.png
// .box 엘리먼트가 없을경우 생성후 처리
function clickImageBtn() {
  const clickedImageBtn = document.querySelector('.image-btn');
  clickedImageBtn.addEventListener('click', function() {
    const insertImageToBox = document.querySelector('.box');
    const src = `https://i.imgur.com/69NjYBH.png`;
    const str = `<img src=${src}alt=''>`;
    insertImageToBox.innerHTML = str;
  });
}