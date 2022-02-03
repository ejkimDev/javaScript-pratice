// default : 기본 통로로 데이터가 빠져나갈 수 있는 구조 -> 하나의 데이터만 내보낼 수 있다.
// (따로 이름을 활용하지 않기 때문에 함수 이름을 지정하지 않아도 됨)
export default function (data){     // 타입을 구분해줄 수 있는 함수
// = export default function getType(data){
  return Object.prototype.toString.call(data).slice(8, -1);
}