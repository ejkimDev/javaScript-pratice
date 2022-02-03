// 반복문(For)
// for(시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul');

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');    // 메모리상 li 태그를 만들어서 li 변수에 연결 
  li.textContent = `list-${i + 1}`;
  li.addEventListener('click', function () {
    console.log(li.textContent);
  })
  ulEl.appendChild(li);   // ulEl의 자식 요소로 변수 li 삽입
}