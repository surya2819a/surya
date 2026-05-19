
let value = document.getElementById("input").value;
let btn = document.getElementById("btn")
let body = document.getElementById("body")
btn.addEventListener("click",()=>{
    let value = document.getElementById("input").value;
    body.style.backgroundColor = value
})