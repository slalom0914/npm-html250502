//자료형
//원시형 타입(primative data type) - stack공간에 담김 - 자동소멸
// 문자형, 숫자, 논리형(if문과 for문-true, false)
//참조형 타입(reference data type) - heap공간 - 중요

console.log(typeof 123);
console.log(typeof '123');
//특정한 변수의 값을 비워둘 때 
console.log(typeof null);
console.log(typeof undefined);

let tomato = {
  name: '토마토',
  color: 'red',
  display: '🍅'
}

console.log(tomato.color);
console.log(tomato.display);
console.log(tomato.name);