// 삼항 연산자
// 조건 ? 참 : 거짓

let msg

function getAlert(message){
  return message ? message : '메시지가 존재하지 않습니다.'
}

msg = getAlert()
console.log(msg);
msg = getAlert(null)
console.log(msg);
msg = getAlert('undefined')
console.log(msg);
msg = getAlert("undefined")
console.log(msg);
msg = getAlert(undefined)
console.log(msg);