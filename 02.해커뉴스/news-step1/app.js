const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
xhr.open("GET", NEWS_URL, false)
//xhr.send() //waitting 상황 기다리는 중
const v_root = document.querySelector("#root")
//console.log(v_root.innerHTML);
v_root.innerHTML = "조회결과"
/*

*/