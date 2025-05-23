// Object(객체)
const userA = {
  name: '이순신',
  age: 55
}
const userB = {
  name: '강감찬',
  age: 56,
  parent: userA
}

console.log(userA);
//아래는 원본 값을 변경했다. - 얕은복사 vs 깊은복사
userA.age = 80//재정의하였다.-> let
console.log(userA);
console.log(userB.parent);
