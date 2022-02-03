// String.prototype.indexOf()
const result = 'Hello world'.indexOf('world');
const resultS = 'Hello world'.indexOf('search');
console.log(result);      // 6
console.log(resultS);     // -1

const str = '0123';   // 문자 데이터
console.log(str);
console.log(str.length);    // 문자 데이터 안의 글자가 몇개인가?

const strH = 'Hello world';
console.log(strH.slice(0, 3));    // 0번째부터 3번째까지 직전까지 잘라냄
console.log(strH.slice(6));       // 6번째부터 끝까지 잘라냄

// 첫번째 인수의 문자를 찾아서 두번째 인수로 바꿔줌
console.log(strH.replace('world', 'searchKim'));    // Hello searchKim
console.log(strH.replace(' world', ''));            // Hello

const strM = 'ejkim.Dev@gmail.com';
// 이메일 아이디만 추출
console.log(strM.match(/.+(?=@)/)[0]);   // 정규표현식

const strB = '    Hello world   ';
console.log(strB.trim());     // 공백 제거