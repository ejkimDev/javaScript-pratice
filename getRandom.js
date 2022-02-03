// 이름이 지정된 통로로 나와야 하는 구조 -> 이름만 지정되어 있으면 모두 내보낼 수 있다.
export function random() {
  // Math.floor : 소수점 이하 버림
  return Math.floor(Math.random() * 10);    // 랜덤한 정수 리턴
}
export const user = {
  name : 'searchkim',
  age : 29
}
// 기본 통로 / 이름이 지정된 통로 같이 사용할 수 있다.
export default 123;       