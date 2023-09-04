var cursor=document.querySelector(".cursor")
var a=document.querySelector(".bt")

a.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.pageX +'px'
    cursor.style.top=e.pageY +'px'
})