let c = document.querySelector("canvas")
let i = document.querySelector("textarea")
var ctx = c.getContext("2d");

function splitString(str, ele, fontSize) {
    
    
    let width = ele.clientWidth; // Width of the element
    let charactersPerLine = Math.floor(width / fontSize);
    let result = [];
    let lines = str.split('\n'); // Split by existing newline characters

    lines.forEach(line => {
        for (let i = 0; i < line.length; i += charactersPerLine) {
            result.push(line.slice(i, i + charactersPerLine));
        }
    });
    return result
}

let dimensions = c.getBoundingClientRect()

console.log(dimensions)
c.height = dimensions.height
c.width = dimensions.width
window.addEventListener("resize",()=>{
    let dimensions = c.getBoundingClientRect()
    console.log(dimensions)
    c.height = dimensions.height
    c.width = dimensions.width
})
   

setInterval(()=>{
ctx.clearRect(0, 0, c.width, c.height);
ctx.font = "16px monospace";
ctx.fillStyle = "white"
let str = splitString(i.value,c,16)
for (let _ = 0; _ < str.length; _++) {
    console.log(str[_],16*(_+1))
ctx.fillText(str[_],1,16*(_+1));
}
},33);
