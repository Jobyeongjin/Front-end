// addEventListener 실습 📝
// 실습 1.
const alertMessage = function () {
  alert('메롱!!!');
};


// 실습 2.
const myBtn = document.querySelector('#my-btn');
myBtn.addEventListener('click', alertMessage);


// 실습 3.
const myInput = document.querySelector('#text-input');
myInput.addEventListener('input', function (e) {
  const myPtag = document.querySelector('#my-paragraph');
  myPtag.innerText = e.target.value;
});


// 실습 4.
const colorInput = document.querySelector('#color-input');
const changeColor = function (e) {
  const h2Tag = document.querySelector('h2');
  h2Tag.style.color = e.target.value;
}
colorInput.addEventListener('input', changeColor);


// 취소 실습 📝
// 실습 1.
const checkBox = document.querySelector('#my-checkbox');
checkBox.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);
});


// 실습 2.
const formTag = document.querySelector('#my-form');
formTag.addEventListener('submit', function (e) {
  console.log(e);
  e.preventDefault();
  e.target.reset();
});


// 실습 3.
const aTag = document.querySelector('#my-link');
aTag.addEventListener('click', function (e) {
  console.log(e);
  e.preventDefault();
});


// 실습 4.
document.addEventListener('scroll', function (e) {
  console.log(e);
  e.preventDefault();
});


// 다양한 이벤트 유형 참고 클릭 👍 -> https://developer.mozilla.org/en-US/docs/Web/Events