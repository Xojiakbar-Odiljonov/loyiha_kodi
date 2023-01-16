let btn =document.querySelector(".btn1"),
menu=document.querySelector('.menu')


btn.addEventListener("click",function(){
    menu.classList.toggle("active")
    console.log("active")
})
// btn.addEventListener("click",function(){
//     menu.classList.add("active")
//     menu.classList.remove("active")
// })
