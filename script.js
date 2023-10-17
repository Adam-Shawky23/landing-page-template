const bookmarkName = document.getElementById("bookN")
const speedyName = document.getElementById("speedyN")
const EasyName = document.getElementById("easyN")
const BookmarkSec = document.getElementById("simple")
const speedySec = document.getElementById("quick")
const EasySec = document.getElementById("easySec")
const show1 = document.getElementById("show1")
const hidden1 = document.getElementById("hidden")
const show2 = document.getElementById("show2")
const hidden2 = document.getElementById("hidden1")
const show3 = document.getElementById("show3")
const hidden3 = document.getElementById("hidden2")

speedyName.addEventListener("click",()=>{
    speedyName.style.color = "hsl(0, 94%, 66%)"
    speedyName.style.borderBottomColor = "hsl(0, 94%, 66%)"
    bookmarkName.style.color = "hsl(229, 8%, 60%)"
    bookmarkName.style.borderBottomColor = "hsl(229, 8%, 60%)"
    EasyName.style.color = "hsl(229, 8%, 60%)"
    EasyName.style.borderBottomColor = "hsl(229, 8%, 60%)"
    speedySec.style.display = "flex"
    BookmarkSec.style.display = "none"
    EasySec.style.display = "none"
})
bookmarkName.addEventListener("click",()=>{
    bookmarkName.style.color = "hsl(0, 94%, 66%)"
    bookmarkName.style.borderBottomColor = "hsl(0, 94%, 66%)"
    speedyName.style.color = "hsl(229, 8%, 60%)"
    speedyName.style.borderBottomColor = "hsl(229, 8%, 60%)"
    EasyName.style.color = "hsl(229, 8%, 60%)"
    EasyName.style.borderBottomColor = "hsl(229, 8%, 60%)"
    BookmarkSec.style.display = "flex"
    speedySec.style.display = "none"
    EasySec.style.display = "none"
})
EasyName.addEventListener("click",()=>{
    EasyName.style.color = "hsl(0, 94%, 66%)"
    EasyName.style.borderBottomColor = "hsl(0, 94%, 66%)"
    speedyName.style.color = "hsl(229, 8%, 60%)"
    speedyName.style.borderBottomColor = "hsl(229, 8%, 60%)"
    bookmarkName.style.color = "hsl(229, 8%, 60%)"
    bookmarkName.style.borderBottomColor = "hsl(229, 8%, 60%)"
    EasySec.style.display = "flex"
    speedySec.style.display = "none"
    BookmarkSec.style.display = "none"
})
show1.addEventListener("click",()=>{
    hidden1.classList.toggle("h")
})
show2.addEventListener("click", ()=>{
    hidden2.classList.toggle("h")
})
show3.addEventListener("click", ()=>{
    hidden3.classList.toggle("h")
})
