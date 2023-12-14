const odd = 'cjs 홀수입니다. ';
const even = 'cjs 짝수입니다.';


const yaho = {
  odd,
  even,
}
module.exports = yaho;
// 변수를 프로퍼티로 넣어보낸다
// 변수도 값을 가지고 있고, 프로퍼티도 값을 가지고 있으니 
// 구조는 같다. 서로 치환하기 좋다
console.log(yaho)