
var lt = gsap.timeline({
    repeat:-1
});

lt.to(".img-container",{
    width:"100%",
    duration:2,
    stagger:2
},'a')
.to(".text h1",{
    ease:"expo",
    stagger:2,
    top:0
},'a')
.to(".text h1",{
    delay:2,
    ease:"expo",
    stagger:2,
    top:"-100%"
},'a')