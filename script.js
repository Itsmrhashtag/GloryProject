var tl=gsap.timeline();
var cursor=document.querySelector("#cursor");
var tl2=gsap.timeline();
var tl3=gsap.timeline();
var tl4=gsap.timeline();
var tl5=gsap.timeline();
var tl6=gsap.timeline();
var tl7=gsap.timeline();
function page1Animation(){
    document.getElementById("main-page1").addEventListener("mousemove",function(dets){
        console.log(dets.x,dets.y)
        gsap.to(cursor,{
            backgroundColor:"#fff",
            x:dets.x,
            y:dets.y-200,
            duration:0.6,
            ease:"back.out"
        })
    })
    tl.from("#companyName",{
        y:-30,
        duration:0.5,
        delay:1,
        opacity:0
    })
    
    tl.from("#task h3",{
        y:-30,
        duration:0.5,
        delay:0.5,
        opacity:0,
        stagger:0.4
    })
    tl.from("#connect",{
        y:-30,
        duration:0.5,
        delay:0.5,
        opacity:0
    })
    
    tl2.from("#left-container h1",{
        y:80,
        opacity:0,
        duration:1,
        delay:0.8
    })
    
    tl2.from("#left-side-container",{
        y:80,
        opacity:0,
        duration:1,
        delay:0.2
    })
    tl2.from("#right-container",{
        y:80,
        opacity:0,
        duration:1,
        delay:0.2
    })
    
    tl2.from("#image-container",{
        scale:0.5,
        opacity:0,
        duration:1,
        delay:0.8
    })
    
    gsap.fromTo("#image-container",{
        backgroundSize: "150%",    
        backgroundPosition: "center center" 
      }, 
      {
        backgroundSize: "100%",    
        backgroundPosition: "center center",
        duration:1.5,
        delay:0.2,
        scrollTrigger:{
            trigger:"#dum-button",
            scroller:"body",
            start:"top 30%",
            end:"top 60%",
            scrub:2
        }
      });

}

function page2Animation(){
    document.getElementById("main-page2").addEventListener("mousemove",function(dets){
        console.log(dets.x,dets.y)
        gsap.to(cursor,{
            backgroundColor:"#111",
            x:dets.x,
            y:dets.y-200,
            duration:0.6,
            ease:"back.out"
        })
    })
    
    
    
    gsap.from("#main-page2 #container-detail",{
        opacity:0,
        duration:1,
        y:40,
        scrollTrigger:{
            trigger:"#main-page2 ",
            scroller:"body",
            start:"top 60%",
            end:"top 30%",
            scrub:2
        }
    })
    
    gsap.from("#main-page2 #norm",{
        opacity:0,
        duration:1,
        delay:1,
        y:40,
        scrollTrigger:{
            trigger:"#main-page2 #container-detail",
            scroller:"body",
            start:"top 80%",
            end:"top 30%",
            scrub:2
        }
    })
    
    gsap.from("#main-page2 #norm p:nth-child(2n)",{
        opacity:0,
        duration:1,
        delay:1,
        y:40,
        scrollTrigger:{
            trigger:"#main-page2 #norm p",
            scroller:"body",
            start:"top 80%",
            end:"top 30%",
            scrub:2
        }
    })
}
function page3Animation(){
    document.getElementById("main-page3").addEventListener("mousemove",function(dets){
        console.log(dets.x,dets.y)
        gsap.to(cursor,{
            backgroundColor:"#fff",
            x:dets.x,
            y:dets.y-200,
            duration:0.6,
            ease:"back.out"
        })
    })
}
function page4Animation(){
    document.getElementById("main-page4").addEventListener("mousemove",function(dets){
        console.log(dets.x,dets.y)
        gsap.to(cursor,{
            backgroundColor:"#fff",
            x:dets.x,
            y:dets.y-200,
            duration:0.6,
            ease:"back.out"
        })
    })
    
    tl4.fromTo("#left-image-container",{
        backgroundSize: "100%",
      }, 
      {
        backgroundSize: "120%",
        duration:1.5,
        delay:0.2,
        scrollTrigger:{
            trigger:"#left-side",
            scroller:"body",
            // markers:true,
            start:"top 30%",
            end:"top 60%",
            scrub:2
        }
      });
      tl4.from("#left-side" ,{
        opacity:0,
        duration:0.5,
        delay:0.2,
        y:60,
        scrollTrigger:{
            trigger:"#main-page4",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
    tl4.from("#right-side" ,{
        opacity:0,
        duration:0.5,
        delay:0.2,
        y:60,
        scrollTrigger:{
            trigger:"#main-page4",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
}
// document.getElementById("page5-image-conatiner").addEventListener("mousemove",function(dets){
//     console.log(dets.x,dets.y)
//     gsap.to(cursor,{
//         backgroundColor:"#111",
//         x:dets.x,
//         y:dets.y-200,
//         duration:0.6,
//         ease:"back.out"
//     })
// })
function page5Animation(){
    document.getElementById("main-page5").addEventListener("mousemove",function(dets){
        console.log(dets.x,dets.y)
        gsap.to(cursor,{
            backgroundColor:"#fff",
            x:dets.x,
            y:dets.y-200,
            duration:0.6,
            ease:"back.out"
        })
    })
    tl5.fromTo("#main-page5 #page5-image-conatiner",{
        backgroundSize: "100%",
      }, 
      {
        backgroundSize: "120%",
        duration:1.5,
        delay:0.2,
        scrollTrigger:{
            trigger:"#main-page5",
            scroller:"body",
            // markers:true,
            start:"top 30%",
            end:"top 60%",
            scrub:2
        }
      });
  
      tl5.from("#title-text" ,{
        opacity:0,
        duration:0.5,
        delay:0.2,
        y:60,
        scrollTrigger:{
            trigger:"#main-page5",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
      tl5.from("#large-text" ,{
        opacity:0,
        duration:5,
        delay:5,
        y:100,
        scrollTrigger:{
            trigger:"#main-page5",
            scroller:"body",
            start:"top 90%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
    tl5.from("#detail-container h1" ,{
        opacity:0,
        duration:0.5,
        delay:0.2,
        y:60,
        scrollTrigger:{
            trigger:"#large-text",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
    tl5.from("#detail-container p" ,{
        opacity:0,
        duration:0.5,
        delay:0.2,
        y:60,
        scrollTrigger:{
            trigger:"#large-text",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
    tl5.from("#detail-container h2" ,{
        opacity:0,
        duration:0.5,
        delay:0.2,
        y:60,
        scrollTrigger:{
            trigger:"#detail-container h1",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
}
function page6Animation(){
    document.getElementById("main-page6").addEventListener("mousemove",function(dets){
        console.log(dets.x,dets.y)
        gsap.to(cursor,{
            backgroundColor:"#111",
            x:dets.x,
            y:dets.y-200,
            duration:0.6,
            ease:"back.out"
        })
    })
    tl6.from("#main-page6 #up-segment" ,{
        opacity:0,
        duration:0.5,
        delay:0.2,
        y:60,
        scrollTrigger:{
            trigger:"#main-page6",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
    tl6.from("#main-page6 #down-segment" ,{
        opacity:0,
        duration:0.5,
        delay:0.2,
        y:60,
        scrollTrigger:{
            trigger:"#main-page6 #up-segment",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
    tl6.fromTo("#main-page6 #down-segment img" ,
        { opacity: 0, scale: 2 },{
        opacity:1,
        scale:1,
        duration:0.5,
        delay:0,
        scrollTrigger:{
            trigger:"#main-page6 #down-segment",
            scroller:"body",
            start:"top 80%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
}
function page7Animation(){
    document.getElementById("main-page7").addEventListener("mousemove",function(dets){
        console.log(dets.x,dets.y)
        gsap.to(cursor,{
            backgroundColor:"#fff",
            x:dets.x,
            y:dets.y-200,
            duration:0.6,
            ease:"back.out"
        })
    })
    tl7.from("#main-page7 #left-part h1" ,{
        opacity:0,
        scale:1,
        duration:0.2,
        delay:0.5,
        y:90,
        scrollTrigger:{
            trigger:"#main-page7",
            scroller:"body",
            start:"top 50%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
    tl7.from("#main-page7 #left-part p" ,{
        opacity:0,
        scale:1,
        duration:0.2,
        delay:0.5,
        y:90,
        scrollTrigger:{
            trigger:"#main-page7",
            scroller:"body",
            start:"top 50%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
    tl7.from("#main-page7 #bottom-part h1" ,{
        opacity:0,
        scale:1,
        duration:0.2,
        delay:0.5,
        y:90,
        scrollTrigger:{
            trigger:"#main-page7 #newpart #button",
            scroller:"body",
            start:"top 50%",
            // markers:true,
            end:"top 30%",
            scrub:2
        }
    })
}
page1Animation()
page2Animation()
page3Animation()
page4Animation()
page5Animation()
page6Animation()
page7Animation()