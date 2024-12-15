gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);
gsap.timeline()
.from('.anime_pic',{opacity:0,duration:1.5})
.from('.navbar',{yPercent:100,opacity:0,ease:'bounce',duration:1})
.to('.greet_visitor',{text:'hello dear visitor, i hope that you like my website',duration:1})
.from('.what_i_do',{opacity:0,yPercent:100,duration:1,ease:'back'});


let navbar_element=document.querySelectorAll('.navbar span');
navbar_element.forEach((Element)=>{

  let underlineTween = gsap.to(Element,{textDecoration:'underline',paused:true});

  Element.addEventListener('mouseenter',(event)=>{
underlineTween.restart();
  });


   Element.addEventListener('mouseleave',(event)=>{
underlineTween.reverse();
  });


});
gsap.to ('.pen_inner', {
  xPercent: 100,
  duration: 8,
  scrollTrigger: {
    trigger: '#section2',
    start: '30% center',
    end:'bottom 20%',
    scrub:5,
    // markers:true,
     }
 
});


gsap.to('.pen_cover', {
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: '#section2',
    start: '30% center',
    end:'bottom 20%',
  // markers:true,
    scrub:5,

    
  }
 
});


const code_pen_works= document.querySelector('#PENWORKS');

function getScrollAmount() {
  let code_pen_works_width = code_pen_works.offsetWidth;
  console.log("scroll = "+(code_pen_works_width - window.innerWidth));
  return code_pen_works_width - window.innerWidth;  
}

const tween = gsap.to(code_pen_works, {
  x: -1 *getScrollAmount(),
  duration: 5,
  ease: "none"
});

ScrollTrigger.create({
  trigger: "#PENWORKS",
  start: "center center",
  end: `+=${getScrollAmount()}`,
  animation: tween,
pin: true,
pinSpacing:true,
  scrub: 1,
  invalidateOnRefresh: true,
  // markers:true

});


gsap.to ('.pen_inner_nomotion', {
  x: 0,
  duration: 8,
  scrollTrigger: {
    trigger: '.pen_nomotion',
    start: 'top 20%',
    end:'bottom 20%',
 
    scrub:5,

  }
 
});

gsap.to('.digital_lab_demo',{
  rotate: -10,
  duration:5,
  yoyo:true,
  ease:'back',
  repeat:-1
});


gsap.to('#section5',{
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger:'#section5',
    start:'82% top',
    end: '+=1700',
    scrub:true,
    // markers:true
  }
});


gsap.to('#section3',{
  opacity:0,
  duration:4,
  scrollTrigger:{
    trigger:'#section3',
    start:'center top',
end: '+=500',
    scrub:true,
    // markers:true
  }
});

gsap.to('#section4',{
  opacity:0,
  duration:4,
  scrollTrigger:{
    trigger:'#section4',
    start:'center top',
end: '+=200',
    scrub:true,
    // markers:true
  }
});

gsap.from('.pen_inner_nomotion',{
   xPercent:100,
   scrollTrigger: {
    trigger: '#final_section',
    start: 'top center',
    end:'20% center',
    scrub:5,
    // markers:true
     }
 
})

gsap.from('.pen_cover_nomotion',{
   xPercent:-100,
   scrollTrigger: {
    trigger: '#final_section',
    start: 'top center',
    end:'20% center',
    scrub:5,
    // markers:true,
     }
 
})

const navItems = document.querySelectorAll("[data-target]");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    gsap.to(window, {
      duration: 2,
      scrollTo: `#${targetId}`, // Use the target ID directly
      ease: "power3.inOut"
    });
  });
});


 