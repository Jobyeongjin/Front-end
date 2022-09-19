// Modal
const modalOn = document.querySelector('#modal-on');
modalOn.addEventListener('click', function () {
  document.querySelector('#modal').classList.toggle('active');
});

const modalOff = document.querySelector('#modal-off');
modalOff.addEventListener('click', function () {
  document.querySelector('#modal').classList.toggle('active');
});

const modalCancel = document.querySelector('.modal__btn-cancel');
modalCancel.addEventListener('click', function () {
  document.querySelector('#modal').classList.toggle('active');
});

const modalCheck = document.querySelector('.modal__btn-check');
modalCheck.addEventListener('click', function () {
  document.querySelector('#modal').classList.toggle('active');
});


// Password
function checkPassword() {
  let password = document.querySelector('#password');
  let confirm_password = document.querySelector('#password_confirmation');

  if (password.value.length < 8) {
      alert('비밀번호는 8글자 이상이어야 합니다.');
      return;
    }

    if (password.value != confirm_password.value) {
      alert('비밀번호 일치하지 않습니다');
      return;
    }
    else {
      alert('완료');
      return;
    }
}