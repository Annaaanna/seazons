const warm=document.getElementById("warm")
const priznaki=document.getElementById("priznaki")

warm.addEventListener("click", function(){
    setTimeout(function(){
        priznaki.style.background="radial-gradient(pink,rgb(211, 170, 208))"
    },1000)
})
