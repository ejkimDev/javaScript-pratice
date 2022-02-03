const timer = {
  name : 'Searchkim',
  timeout : function () {
    // setTimeout(함수, 시간)
    // 자신이 선언된 함수 범위에 name이 있기 때문에 콘솔에 정상적으로 표출됨
    setTimeout(() => {    
      console.log(this.name);
    } , 2000);
  }
}
timer.timeout();