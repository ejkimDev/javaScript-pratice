const searchkim = {
  name : 'SearchKim',
  normal : function () {    // 익명의 일반함수
    console.log(this.name);
  },
  arrow : () => {           // 화살표 함수
    console.log(this.name);
  }
}
// () : 호출
// 일반함수는 searchkim이라는 객체가 this이기 때문에 this의 name이 콘솔에 표출
searchkim.normal();   // 객체의 메소드 실행
// undefined 표출
searchkim.arrow();    // 객체의 메소드 실행 


const amy = {
  name : 'Amy',
  // searchkim 객체의 normal 데이터 -> 즉, normal의 일반함수 자체가 amy의 normal에 할당
  normal : searchkim.normal,   
  // searchkim 객체의 arrow 데이터 -> 즉, arrow의 화살표함수 자체가 amy의 arrow에 할당
  arrow : searchkim.arrow
}

amy.normal();
amy.arrow();