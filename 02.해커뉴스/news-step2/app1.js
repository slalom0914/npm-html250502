const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"
xhr.open("GET", NEWS_URL, false)
xhr.send() //waitting 상황 기다리는 중

const newsList = JSON.parse(xhr.responseText)//NodeList
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => {
    //console.log("The hash has changed!");
    console.log(location.hash);//#4878909
    //#을 떼어내고 뒤에 id값만 꺼내서 @id치환한다.
    //0번째 자리에는 #이 들어 있으니까 1을 쓴다.
    const id = location.hash.substring(1)
    console.log(id);
  },
);


for(let i=1;i<=10;i=i+1){
  const li = document.createElement("li")
  //insert here
  const a = document.createElement("a")
  //어떤 제목을 클릭할 것인가는 사용자 마음이므로 정할 수 없다.
  a.href = `#${newsList[i].id}`
  a.innerText = `${newsList[i].title}(❤${newsList[i].comments_count})`

  li.appendChild(a)
  ul.appendChild(li) //ul태그 안에 li태그 추가를 10번 반복해줘
}

const v_root = document.querySelector("#root").appendChild(ul)
//console.log(v_root.innerHTML);
//v_root.innerHTML = "조회결과"
/*

*/