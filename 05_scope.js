// 변수 유효범위(Variable Scope)
// var, let, const

function scope() {
  if (true) {
    const a = 123;    // a의 유효범위는 if문 안 -> 블록레벨
    console.log(a);
  }
}
scope();

// let, const는 블록레벨의 유효범위를 가지지만, var는 함수레벨의 유효범위를 가진다.
// 따라서, var를 함수레벨로 사용하면 메모리 누수로 발전할 수 있기 때문에 권장 X
