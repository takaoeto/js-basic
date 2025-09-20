let ok = true;
let maybeOk = false;

//
ok = 1 === 1;
ok = 'hello' === 'hello';
ok = 'hello' !== 'hello';
//同値演算子(これは使わない)
// ok = 1 == '1';

const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
const coffee3 = coffee1;

ok = coffee1 === coffee3;
ok = coffee1.name === coffee2.name;
const fruits1 = ['Apple', 'Banana'];
const fruits2 = ['Apple', 'Banana'];
ok = fruits1 === fruits2;

ok = 1 >= 0;
ok = 'a' > 'b';
ok = 'A' < 'b';
ok = 100;
ok = 'false';
ok = {};

if (ok) {
  console.log(ok);
  // console.log('OK!');
} else {
  console.log('NO!');
}
ok = false && false;
ok = 'hi' && 'hi';
console.log(ok);

//セッション#58
let userName = '' || 'User';
console.log(userName);
//??を使うことで、空文字として判定されるようになる
userName = '' ?? 'User';
console.log(userName);
//『??』と論理演算子（|| &&）は同時に使うことができない。
// userName = '' ?? 'User' && 1

let okk;
okk = okk ? 'OK!' : 'NG...';
console.log(okk);

//セッション#64
function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato': {
      const message = `${vegetable} is red`;
      console.log(message);
      break;
    }
    case 'carrot':
    case 'pumpkin': {
      const message = `${vegetable} is orange`;
      console.log(message);
      break;
    }
    case 'onion': {
      const message = `${vegetable} is white`;
      console.log(message);
      break;
    }
    default: {
      const message = `Not Found`;
      console.log(message);
      break;
    }
  }
}

vegetableColor('carrot');
