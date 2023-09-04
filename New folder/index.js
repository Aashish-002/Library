var cursor=document.querySelector(".cursor")
var a=document.querySelector(".bt")

document.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.pageX +'px'
    cursor.style.top=e.pageY +'px'
})