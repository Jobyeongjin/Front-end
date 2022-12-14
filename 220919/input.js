// addEventListener μ€μ΅ π
// μ€μ΅ 1.
const alertMessage = function () {
  alert('λ©λ‘±!!!');
};


// μ€μ΅ 2.
const myBtn = document.querySelector('#my-btn');
myBtn.addEventListener('click', alertMessage);


// μ€μ΅ 3.
const myInput = document.querySelector('#text-input');
myInput.addEventListener('input', function (e) {
  const myPtag = document.querySelector('#my-paragraph');
  myPtag.innerText = e.target.value;
});


// μ€μ΅ 4.
const colorInput = document.querySelector('#color-input');
const changeColor = function (e) {
  const h2Tag = document.querySelector('h2');
  h2Tag.style.color = e.target.value;
}
colorInput.addEventListener('input', changeColor);


// μ·¨μ μ€μ΅ π
// μ€μ΅ 1.
const checkBox = document.querySelector('#my-checkbox');
checkBox.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);
});


// μ€μ΅ 2.
const formTag = document.querySelector('#my-form');
formTag.addEventListener('submit', function (e) {
  console.log(e);
  e.preventDefault();
  e.target.reset();
});


// μ€μ΅ 3.
const aTag = document.querySelector('#my-link');
aTag.addEventListener('click', function (e) {
  console.log(e);
  e.preventDefault();
});


// μ€μ΅ 4.
document.addEventListener('scroll', function (e) {
  console.log(e);
  e.preventDefault();
});


// λ€μν μ΄λ²€νΈ μ ν μ°Έκ³  ν΄λ¦­ π -> https://developer.mozilla.org/en-US/docs/Web/Events