/* function User(first, last) {    // 생성자 함수
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {        // prototype 속성에 함수를 만들어주면 메모리에 한번만 생성됨 
  return `${this.firstName} ${this.lastName}`;    // 데이터 보관
} */

class User {
  // constructor: function(first, last){ 와 같다.
  constructor(first, last){
    this.firstName = first;
    this.lastName = last;
  }
  // class를 사용하면 프로토타입 속성을 사용하지 않아도 프로토타입 메소드가 정의된다.
  getFullName(){
    return `${this.firstName} ${this.lastName}`;    // 데이터 보관
  }
}

const search = new User('Search', 'Kim');
const amy = new User('Amy', 'Kim');
const neo = new User('Neo', 'Kim');

console.log(search.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());