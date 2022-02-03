
import random from './getRandom';

const a = random();

// switch 조건문
switch (a) {
  case 0:
    console.log('a is o');
    break;
  case 1:
    console.log('a is 1');
    break;
    default:
    console.log('rest...');
    break;
}

// if~else 조건문
if (a === 0) {
  console.log('a is o');
} else if(a === 1){
  console.log('a is 1');
} else {
  console.log('rest...');
}