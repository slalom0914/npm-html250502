// Nullish 병합

const n = 0

// OR연산자를 사용하는 경우
// 0   0   0
// 0   1   1
// 1   0   1
// 1   1   1
const num1 = 1 || 7
console.log(num1);//7
const num11 = n || 7
console.log(num11);//7
const num2 = n | 7
console.log(num2);

let i = 1
let j = 2
// or연산자 한개 이든 두 개 이든 실행문이 실행이 되는것은 같다.
// 그러나 한 개 일때는 앞에 조건이 참이더라도 뒤에 조건도 무조건 따진다.(비효율적임)
if((++i >= j) || (i <= --j)){
  //여기 if
  2 >= 2
  2 <= 1
  console.log('여기');
}
else{
  //여기 else
  console.log('else');
}
console.log("i: "+i+", j:"+j);