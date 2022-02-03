const pi = 3.14156265358979;
console.log(pi);

const str = pi.toFixed(2);    // 소수점 2자리까지 인지 -> 문자데이터 반환
console.log(str);
console.log(typeof str);

const integer = parseInt(str);    // 정수형으로 반환
const float = parseFloat(str);    // 소수형으로 반환
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float);

console.log('abs: ', Math.abs(-12));      // -12의 절대값
console.log('min: ', Math.min(2, 8));     // 2와 8 중에 가장 작은 값
console.log('max: ', Math.max(2, 8));     // 2와 8 중에 가장 큰 값
console.log('ceil: ', Math.ceil(3.14));   // 올림
console.log('floor: ', Math.floor(3.14)); // 내림
console.log('round: ', Math.round(3.14)); // 반올림
console.log('random: ', Math.random());   // 랜덤한 숫자 추출(소수 단위)
