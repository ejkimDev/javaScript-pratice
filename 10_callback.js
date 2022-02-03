function timeout(callback) {
  setTimeout(() => {
    console.log('SEARCHKIM');
    callback();
  }, 3000);
}

// 콜백 함수
timeout(() => {
  console.log('Done!');
});