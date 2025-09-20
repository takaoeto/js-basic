//セッション58
let userName = '' || 'User';
console.log(userName);
//??を使うことで、空文字として判定されるようになる
userName = '' ?? 'User';
console.log(userName);
//『??』と論理演算子（|| &&）は同時に使うことができない。
// userName = '' ?? 'User' && 1
