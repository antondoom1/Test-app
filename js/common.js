// Header

// const htmlBtn = document.querySelector('.btn-html');
// const cssBtn = document.querySelector('.btn-css');
// const jsBtn = document.querySelector('.btn-js');

// function htmlBtnOnClick() {
//   console.log('htmlBtn clicked');
// }

// function cssBtnOnClick() {
//   console.log('cssBtn clicked');
// }

// function jsBtnOnClick() {
//   console.log('jsBtn clicked');
// }

// htmlBtn.addEventListener('click', htmlBtnOnClick);
// cssBtn.addEventListener('click', cssBtnOnClick);
// jsBtn.addEventListener('click', jsBtnOnClick);

// Another way

const buttons = document.getElementsByClassName('btn');

function initBtns(classEl) {
  if (classEl === 'btn btn-html') {
    console.log('HTML btn clicked');
  } else if (classEl === 'btn btn-css') {
    console.log('CSS btn clicked');
  } else if (classEl === 'btn btn-js') {
    console.log('JS btn clicked');
  }
}

function btnOnClick(eventObj) {
  let elemet = eventObj.currentTarget;
  let currentEl = elemet.className;
  initBtns(currentEl);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', btnOnClick);
}
