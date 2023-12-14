const odd = 'cjs 홀수입니다. ';
const even = 'cjs 짝수입니다.';

exports.odd = 'cjs 홀수입니다. ';
exports.even = 'cjs 짝수입니다. ';
// 변수를 프로퍼티로 넣어보낸다
// 변수도 값을 가지고 있고, 프로퍼티도 값을 가지고 있으니 
// 구조는 같다. 서로 치환하기
console.log(exports)

// ! exports === module.exports -> true;
// ! 객체형식 일때만 치환하며 사용가능 
// ! 함수를 넣을때는 저런형식으로 안됨!!! 