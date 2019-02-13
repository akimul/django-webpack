export let checkTime = (i)=> {
   if (i < 10) {i = "0" + i}
   return i
}

export let startTime = () =>{
   let today = new Date()
   let h = today.getHours()
   let m = today.getMinutes()
   let s = today.getSeconds()
   m = checkTime(m)
   s = checkTime(s)
   counter.innerHTML = h + ":" + m + ":" + s
   setTimeout(startTime, 500)
}
