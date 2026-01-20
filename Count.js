let val = 0;
let result = document.querySelector(".result");
function inc() {
  result.innerText = ++val;
}
function dec() {
  if (val == 0) {
    result.innerText = val = 0;
  } else {
    result.innerText = --val;
  }
}
function auto() {
    let checkvalue = Number(document.querySelector('.num').value)
  if (val === 0) {
    let clear = setInterval(()=> {
      val++;
      result.innerText = val;
      if (val === checkvalue) {
        clearInterval(clear)
        innerText=checkvalue=''
      }
      else{
        if (checkvalue===0) {
            result.innerText=val=0
        }
      }
    }, 100);
  }
}
function refresh() {
  result.innerText = val = 0;
//   clearInterval(clear())
}

