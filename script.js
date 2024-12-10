const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", function(){
    gsap.to(".card1", {
        scale: 0.7,
        opacity: 0,
        ease: "circ.out",
        scrollTrigger: {
            trigger: ".card1",
            start: "top 15%",
            end: "bottom 15%",
            scrub: 1,
        },
    })
    
    gsap.to(".card2", {
        scale: 0.7,
        opacity: 0,
        ease: "circ.out",
        scrollTrigger: {
            trigger: ".card2",
            start: "top 10%",
            end: "bottom 10%",
            scrub: 1,
        },
    })
    
    gsap.to(".card3", {
        scale: 0.7,
        opacity: 0,
        ease: "circ.out",
        scrollTrigger: {
            trigger: ".card3",
            start: "top 10%",
            end: "bottom 10%",
            scrub: 1,
        },
    })
    
    gsap.to(".card4", {
        scale: 0.7,
        opacity: 0,
        ease: "circ.out",
        scrollTrigger: {
            trigger: ".card4",
            start: "top 10%",
            end: "bottom 10%",
            scrub: 1,
        },
    })
    
    gsap.to(".card5", {
        scale: 0.7,
        opacity: 0,
        ease: "circ.out",
        scrollTrigger: {
            trigger: ".card5",
            start: "top 10%",
            end: "bottom 10%",
            scrub: 1,
        },
    })

    function loaderTime(){
        let a = 0;

        setInterval(()=>{

            if(a<100){
                a += Math.floor(Math.random() *15);
                document.querySelector("#loader h1").innerHTML = a + "%";
            }
            else{
                a = 100;
                document.querySelector("#loader h1").innerHTML = a + "%";
                }

        }, 100);


    }
    loaderTime();

    var tl = gsap.timeline();


tl.to("#loader h1",{
    scale : 1.3,
    // duration : 1,
    // delay : 0.5
})

tl.to("#loader",{
    top : "-100vh",
    delay : 2,
    duration : 1.2
})


    //loader
    // gsap.to("#loader", {
    //     top:"-100vh",
    //     // opacity: 0,
    //     duration: 1,
    //     ease: "power2.out",
    // })
    
    
})

// gsap.to(".card1", {
//     scale: 0.7,
//     opacity: 0,
//     ease: "circ.out",
//     scrollTrigger: {
//         trigger: ".card1",
//         start: "top 15%",
//         end: "bottom 15%",
//         scrub: 2,
//     },
// })

// gsap.to(".card2", {
//     scale: 0.7,
//     opacity: 0,
//     ease: "circ.out",
//     scrollTrigger: {
//         trigger: ".card2",
//         start: "top 10%",
//         end: "bottom 10%",
//         scrub: 2,
//     },
// })

// gsap.to(".card3", {
//     scale: 0.7,
//     opacity: 0,
//     ease: "circ.out",
//     scrollTrigger: {
//         trigger: ".card3",
//         start: "top 10%",
//         end: "bottom 10%",
//         scrub: 2,
//     },
// })

// gsap.to(".card4", {
//     scale: 0.7,
//     opacity: 0,
//     ease: "circ.out",
//     scrollTrigger: {
//         trigger: ".card4",
//         start: "top 10%",
//         end: "bottom 10%",
//         scrub: 2,
//     },
// })

// gsap.to(".card5", {
//     scale: 0.7,
//     opacity: 0,
//     ease: "circ.out",
//     scrollTrigger: {
//         trigger: ".card5",
//         start: "top 10%",
//         end: "bottom 10%",
//         scrub: 2,
//     },
// })


//website-vid

// Check if device is desktop/laptop (screen width > 1024px)
if (window.innerWidth > 1024) {
    var websites = document.querySelectorAll(".websites .website");
    websites.forEach(website=>{
        website.addEventListener("mousemove", function(){
            gsap.set(website.querySelector(".website-vid"), {
                // duration: 0.7,
                // opacity: 1,
                display: "block",
            })
            gsap.to(website.querySelector(".website-vid"), {
                scale: 1.1,
                ease: "power2.out", 
                duration: 0.3,
            })
            // website.querySelector(".website-vid").src = vid;
        })
        website.addEventListener("mouseleave", function(){
            gsap.to(website.querySelector(".website-vid"), {
                duration: 0.3,
                // opacity: 0,
                scale: 1,
                display: "none",
                ease: "power2.out",
            })
        })
        // website.addEventListener("mouseenter", function(){
        //     website.querySelector(".website-vid").style.display = "block";
        //     let vid = website.getAttribute("data-vid");
        //     // website.querySelector(".website-vid").src = vid;
        //     console.log(vid);
        // })
        // website.addEventListener("mouseleave", function(){
        //     website.querySelector(".website-vid").style.display = "none";
        // })
    })

    document.querySelectorAll(".websites .website").forEach(website=>{
        website.addEventListener("mouseenter", function(){
            document.querySelector("#cursor").innerHTML = "Click Me"
            gsap.to("#cursor", {
                scale: 5.5,
                duration: 0.3,
            })
        })
    })
    document.querySelectorAll(".websites .website").forEach(website=>{
        website.addEventListener("mouseleave", function(){
            document.querySelector("#cursor").innerHTML = ""
            gsap.to("#cursor", {
                scale: 1,
                duration: 0.3,
            })
        })
    })

    
    // document.querySelector(".websites").addEventListener("mouseenter", function(){
    //     gsap.to("#cursor", {
    //         scale: 3.5,
    //         duration: 0.3,
    //     })
    // })
    // document.querySelector(".websites").addEventListener("mouseleave", function(){
    //     gsap.to("#cursor", {
    //         scale: 1,
    //         duration: 0.3,
    //     })
    // })








    //gsap for hero section
gsap.from(".hero h1", {
    opacity: 0,
    x: -100,
    duration: 1.3,
    ease: "power2.out",
    delay: 2.9,
})

gsap.from(".hero .hero-p", {
    opacity: 0,
    y: 100,
    duration: 1.3,
    ease: "power2.out",
    stagger: 0.2,
    delay: 2.9,
})
gsap.from(".hero .image", {
    opacity: 0,
    y: 100,
    duration: 1.3,
    ease: "power2.out",
    delay: 2.9,
})

gsap.from(".hero .hero-next-p", {
    opacity: 0,
    y: 100,
    duration: 1.3,
    ease: "power2.out",
        scrollTrigger: {
        trigger: ".hero .hero-next-p",
        start: "top 86%",
        end: "bottom 50%",
    },
})








}



//cursor
document.addEventListener("mousemove", function(e){
    gsap.to("#cursor", {
        x: e.x,
        y: e.y,
        duration: .7,
    })
})

// document.querySelectorAll("h1, h2, p").forEach(p=>{
//     p.addEventListener("mousemove",()=>{
//         gsap.to("#cursor", {

//             scale: 3.5,
//             duration: 0.3,
//         })
//     })

// })

// document.querySelectorAll("h1, h2, p").forEach(p=>{
//     p.addEventListener("mouseleave",()=>{
//         gsap.to("#cursor", {
//             scale: 1,
//             duration: 0.3,
//         })
//     })
// })





//gsap for page3
// gsap.from(".page3 .content .content-right img", {
//     opacity: 0,
//     y: 100,
//     duration: 0.3,
//     ease: "power2.out",
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: ".page3 .content .content-right img",
//         start: "top 86%",
//         end: "bottom 50%",
//         markers: true,
//     },
// })

//gsap for page4
gsap.from(".page4 .design-card", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    delay: 0.1,
    scrollTrigger: {
        trigger: ".page4 .design-card",
        start: "top 86%",
        end: "bottom 50%",
        // markers: true,
    },
})

//gsap for page5
gsap.from(".page5 h1", {
    opacity: 0,
    y: 100,
    duration: 1.3,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".page5 h1",
        start: "top 86%",
        end: "bottom 50%",
    },
})