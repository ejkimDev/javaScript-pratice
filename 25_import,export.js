// From 'node_modules'
// 경로 없이 이름만 명시하면 node_modules 폴더에서 찾아서 가져옴
import _ from 'lodash'    // lodash install 후 node_modules에서 가져와서 '_'라는 이름으로 main.js에서 활용하겠다.

// 상대경로를 통해서 외부의 특정한 자바스크립트 파일을 가져옴
import getType from './getType'               // 기본 통로를 통해서 가져오는 데이터
// default export : import checkType from './getType'과 같이 이름을 내맘대로 수정할 수 있다.

// 이름을 지정해야되는 통로에서 가져오는 데이터
// import { random, user } from './getRandom'    
// user as search : 꺼내올때는 user라는 이름으로 꺼내오고 활용할 떈 search 사용
// import { random, user as search } from './getRandom'
// * : random, user를 한꺼번에 꺼냄
import * as S from './getRandom'    

console.log(_.camelCase('the hello world'));
console.log(getType([1, 2, 3]));
console.log(S.random(), S.random());
console.log(S.user);
