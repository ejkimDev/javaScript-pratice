// 타이머 함수

setTimeout(function () {
  console.log('SEARCHKIM');
}, 3000);   // 3초

const timer = setTimeout(() => {
  console.log('SEARCHKIM');
}, 3000);

setInterval(function () {
  console.log('SEARCHKIM INTERVAL');
}, 4000);   // 4초

const interval = setInterval(() => {
  console.log('SEARCHKIM INTERVAL');
}, 4000);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', function () {
  clearTimeout(timer);
  clearInterval(interval);
});
