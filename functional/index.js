let c = document.querySelector("canvas")
let i = document.querySelector("textarea")
var ctx = c.getContext("2d");
setInterval(()=>{
ctx.clearRect(0, 0, c.width, c.height);
ctx.font = "16px monospace";
ctx.fillStyle = "white"
ctx.fillText(i.value,1,16);
},20)
