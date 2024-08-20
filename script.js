function homePageAnimation(){
    gsap.set(".slidesm", {scale: 5})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 2
    }
})

tl
.to(".vdodiv", {
    '--clip': "0%",
    ease: Power2
}, 'a')
.to(".slidesm", {
    scale: 1,
    ease: Power2
}, 'a')

.to(".lft", {
    xPercent: -10,
    stagger: .04,
    ease: Power4
}, 'b')
.to(".rgt", {
    xPercent: -10,
    stagger: .04,
    ease: Power4
}, 'b')

document.getElementById("btn1").addEventListener("click", function(){
    window.location.href = "login.html";
});
}

function rightScrollAnimation(){
   gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".working",
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: 1
        },
        xPercent: -300,
        ease: Power4
   })
}

function serviceAnimation(){
    const btn1 = document.querySelector(".btn1");
const hiddenPara1 = document.querySelector(".hiddenpara1");
const box1 = document.querySelector(".box1");

btn1.addEventListener("click", function() {
    hiddenPara1.classList.toggle("hidden");
    btn1.classList.toggle("more"); 
    if (btn1.classList.contains("more")) {
        btn1.textContent = "See less"; 
    } else {
        btn1.textContent = "See more"; 
    }
});

const btn2 = document.querySelector(".btn2");
const hiddenPara2 = document.querySelector(".hiddenpara2");
const box2 = document.querySelector(".box2");


btn2.addEventListener("click", function() {
    hiddenPara2.classList.toggle("hidden");
    btn2.classList.toggle("more");
    if (btn2.classList.contains("more")) {
        btn2.textContent = "See less"; 
    } else {
        btn2.textContent = "See more"; 
    }
});

const btn3 = document.querySelector(".btn3");
const hiddenPara3 = document.querySelector(".hiddenpara3");
const box3 = document.querySelector(".box3");



btn3.addEventListener("click", function() {
    hiddenPara3.classList.toggle("hidden");
    btn3.classList.toggle("more");
    if (btn3.classList.contains("more")) {
        btn3.textContent = "See less"; 
    } else {
        btn3.textContent = "See more";
    }
});
}

function aboutAnimation(){
    const abtBtn = document.querySelector(".abt-btn");
const abtHidden = document.querySelector(".abt-hiddenpara");

abtBtn.addEventListener("click", function() {
    abtHidden.classList.toggle("hidden");
    abtBtn.classList.toggle("more");ss
    if (abtBtn.classList.contains("more")) {
        abtBtn.textContent = "See less";
    } else {
        abtBtn.textContent = "See more";
    }
});
}

document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 20%",
        end: "bottom 20%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);
        }

    })
})



homePageAnimation();
rightScrollAnimation();
serviceAnimation();
aboutAnimation();



