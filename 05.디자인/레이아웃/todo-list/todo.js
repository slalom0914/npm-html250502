//사용자가 입력하는 콤포넌트 -> input 태그
const items = document.querySelector(".items") //ul태그야

const input = document.querySelector(".footer_input")//input태그

const addBtn = document.querySelector(".footer_button")//홈버튼 플러스야
//input태그에서 엔터를 쳤을 때 또는 plus버튼을 클릭했을 때
//재사용을 위해서 함수로 설계 하였다.
const onAdd=()=> {
  //사용자가 입력한 친구만나기를 읽어와서 createItem함수를 호출할 때
  //파라미터로 넘긴다.
  createItem("런닝30분")
}//end of onAdd
//onAdd 즉 이벤트가 발동되었을 때 인터셉트 하여서 사용자가 입력한 itemName을
//ul(.items)태그 아래 li태그에 삽입한다.
const createItem=(itemName)=>{
  console.log(itemName);//사용자가 엔터치거나 plus버튼을 눌렀을 결정된다.
  const itemRow = document.createElement("li")
  itemRow.innerHTML = `
    <span>${itemName}</span>
  `
  return itemRow
}

addBtn.addEventListener('click', ()=>{
  console.log('plus버튼 클릭');
  onAdd();
})
input.addEventListener('keydown', (event)=>{
  console.log(event.key);//13
  if (event.key === 'Enter') {
    // 엔터키를 눌렀을 때 수행할 동작
    console.log('엔터키를 눌렀습니다.');
  }
});