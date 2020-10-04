const bg_ = document.querySelector(".container");
const span = document.querySelector(".content span");
const h1 = document.querySelector(".content h1");
const h3 = document.querySelector(".content h3");
const p = document.querySelector(".content p");
const cta = document.querySelector(".cta");
const quoteP = document.querySelector(".quote p");
const quoteSpan = document.querySelector(".quote span");


const fashionTL = gsap.timeline();

fashionTL.from(bg_, {
    duration: 1.2,
    y: -200,
    height: 0,
    opacity: 0,
    ease: "power3.inOut"
})
    .from(["header", ".logo"], {
        delay: -0.2,
        y: -16,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut"
    })
    .from([span, h1, h3, p, cta, quoteP, quoteSpan], {
        delay: -0.2,
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.ease",
        stagger: {
            amount: .3
        }
    })
    .from(".side_navbar", {
        delay: -0.2,
        x: 16,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut"
    })
    .from(".nav_ span", {
        delay: -0.4,
        x: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: .2
        }
    })
    .from(".cap_item .cap", {
        delay: -1.5,
        x: 0,
        height: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: .8
        }
    })
    .from(".hero_img", {
        delay: -0.4,
        x: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    })

    .from(".social span", {
        delay: -0.8,
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: 0.2
        }
    })
    .from(".indicator span", {
        delay: -0.4,
        x: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: 0.2
        }
    })
    .from(".video", {
        delay: -0.4,
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    })

//for resizing 
window.addEventListener("resize", windowResize);
function windowResize() {
    let container_ = document.querySelector(".container");
    container_.style.height = "100vh";
}

//thank for watching
//please subscribe my channel
