const items = [
  {id:10, name: '벤치프레스', count: 5},
  {id:20, name: '렛풀다운', count: 3},
  {id:30, name: '스쿼트', count: 7},
]

const myCars = [
  {sno:1, carName:"소나타", wheelNum: 4},
  {sno:2, carName:"그랜져", wheelNum: 4},
  {sno:3, carName:"소렌토", wheelNum: 4},
]

for(let i=0;i<myCars.length;i++){
  console.log(myCars[i].carName);
}

const yourCar = [...myCars, {sno:5, carName:"레이", wheelNum: 4}]

for(let i=0;i<yourCar.length;i++){
  console.log(yourCar[i].carName);
}

//삭제하기


const result = myCars.filter((item) => item.sno != 2);

console.log(result);
