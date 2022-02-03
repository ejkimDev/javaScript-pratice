import _ from 'lodash'

const user = {
  name : 'Searchkim',
  age : 29,
  email : 'ejkim.Dev@gmail.com'
};

const copyUser = _.cloneDeep(user);   // 깊은 복사

user.age = 22;
console.log('user', user);
console.log('copyUser', copyUser);

