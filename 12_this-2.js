function User(name) {    // 생성자 함수
  this.name = name;
}
User.prototype.normal = function () { // 메소드(일반 함수 할당)
  console.log(this.name);
}
User.prototype.arrow = () => {        // 메소드(화살표 함수 할당)
  console.log(this.name);
}

// 생성자 함수를 실행한 객체 데이터(search)
const search = new User('SearchKim');

search.normal();    // SearchKim 표출
// 자신이 선언된 함수에서 this가 정의되기 때문에 화살표 함수 내(범위)에 참조할 name이 보이지 않음
search.arrow();     // undefined 표출
