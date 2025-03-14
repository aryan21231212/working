let play = document.querySelector(".play")
let videoContainer = document.querySelector(".video-container")
let h1 = document.querySelectorAll("head")




videoContainer.addEventListener("mouseenter",(e)=>{
    gsap.to(".play",{
        opacity:1,
        scale:1
    })
})

videoContainer.addEventListener("mouseleave",(e)=>{
    gsap.to(".play",{
        opacity:0,
        scale:0
    })
})
videoContainer.addEventListener("mousemove",(e)=>{
    gsap.to(".play",{
        left:e.x-40,
        top:e.y-20
    })
})






document.querySelector(".page4").addEventListener("mouseenter",(e)=>{
    gsap.to(".circle",{
        opacity:1,
        scale:1
    })
})

document.querySelector(".page4").addEventListener("mouseleave",(e)=>{
    gsap.to(".circle",{
        opacity:0,
        scale:0
    })
})
document.querySelector(".page4").addEventListener("mousemove",(e)=>{
    gsap.to(".circle",{
        left:e.x-40,
        top:e.y-20
    })
})


gsap.from("h1",{
    opacity:0,
    y:200,
    duration:0.4,
    stagger:0.3
})
gsap.from("video",{
    opacity:0,
    y:100,
    duration:0.7,
    scale:0.8   
})
