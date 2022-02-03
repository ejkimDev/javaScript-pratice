
// 즉시실행함수
// IIFE(Immediately-Invoked Function Expression)

const a = 7;
function double() {
  console.log(a * 2);
}
double();

// 즉시실행함수 - ()()
(function () {
  console.log(a * 2);
})();

// 즉시실행함수(권장) - (())
(function () {
  console.log(a * 2);
}());

