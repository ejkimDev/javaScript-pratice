const searchkim = {
  name : 'SearchKim',
  // normal : function () { 
  // -> normal()
  normal() {    // 축약형 일반함수
    console.log(this.name);
  },
  arrow : () => {           // 화살표 함수
    console.log(this.name);
  }
}
searchkim.normal(); 
searchkim.arrow(); 