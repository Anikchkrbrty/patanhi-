//moving cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".round");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});


//skills section 
function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


//hamburgermenu 





//project animation 
  let cardOne =document.querySelector(".card1");

  
  cardOne.addEventListener("click",function(){
     anime({
         targets:document.querySelector(".card1"),
         rotateY:"+=180",
 easing:"easeInOutSine",
 duration:10,
     })
 
  })
  
 
 
  let cardTwo =document.querySelector(".card2");
 
  cardTwo.addEventListener("click",function(){
     anime({
         targets:document.querySelector(".card2"),
         rotateY:"+=180",
 easing:"easeInOutSine",
 duration:10,
     })
 
  })
 
 
  let cardThree =document.querySelector(".card3");
 
  cardThree.addEventListener("click",function(){
     anime({
         targets:document.querySelector(".card3"),
         rotateY:"+=180",
 easing:"easeInOutSine",
 duration:10,
     })
 
  })
 
  let cardFour =document.querySelector(".card4");
  cardFour.addEventListener("click",function(){
     anime({
         targets:document.querySelector(".card4"),
         rotateY:"+=180",
 easing:"easeInOutSine",
 duration:10,
     })
 
  })
 
 
  let cardFive =document.querySelector(".card5");

 
  cardFive.addEventListener("click",function(){
     anime({
         targets:document.querySelector(".card5"),
         rotateY:"+=180",
 easing:"easeInOutSine",
 duration:10,
     })
 
  })
 
 
  let cardSix =document.querySelector(".card6");
  
  cardSix.addEventListener("click",function(){
     anime({
         targets:document.querySelector(".card6"),
         rotateY:"+=180",
 easing:"easeInOutSine",
 duration:10,
     })
 
  })






//skills round
  const circle = document.querySelectorAll(".circle")
  circle.forEach((elem)=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;


    for(let i =0; i<dots;i++){
      points +=` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;

    }
    elem.innerHTML=points;

  const pointsMarked = elem.querySelectorAll(".points");
    for(let i=0; i<percent; i++){
      pointsMarked[i].classList.add("marked");
    }
  }) 
  


//header color chnge while scrolling 


let header = document.getElementById("header");
function onScroll (){

  if (window.scrollY>0){
    
    header.classList.add("active-bar")
  }
 else{
    header.classList.remove("active-bar")
  }



  if (window.scrollY>=612){
    
    header.classList.add("active-bar1")
  }
 else{
    header.classList.remove("active-bar1")
  }



  if (window.scrollY>=1265 ){
    
    header.classList.add("active-bar2")
  }
 else{
    header.classList.remove("active-bar2")
  }




  if (window.scrollY>=1823){
    
    header.classList.add("active-bar3")
  }
 else{
    header.classList.remove("active-bar3")
  }




  if (window.scrollY>=2486  ){
    
    header.classList.add("active-bar4")
  }
 else{
    header.classList.remove("active-bar4")
  }
} 
onScroll();
window.addEventListener("scroll",onScroll);



//active navbar on scrolling 






// gsap animation 

let t1 = gsap.timeline();
t1.from(".left svg",{
 left:"25%",
 duration:2,
 delay:1.5,
 scale:2,
 opacity:0
},"page1")

t1.from(".right svg",{
  right:"5%",
  duration:2,
  delay:1.5,
  rotate:"180deg",
  opacity:0
  
 },"page1")



 t1.from("#home-content p,#home-content h1,#home-content h2,#home-content .btn-box",{
 
  duration:2,
 scale:0.5,
 delay:1.5,
   opacity:0
 },"page1")

 t1.from("#home-content .social-menu",{
 
  duration:2,
  delay:1.5,
 x:-100,
   opacity:0
 },"page1")

 

 let t2= gsap.timeline({scrollTrigger:
  {
    trigger: "#about",
    scrub:4,
    start:"20% 95%",
    end:"20% 50%",
// markers:true
  }
  })
 

  t2.from("#left-part .img",{
    duration:5,
    y:300,
    // scale:.1,
    opacity:0
    
  },"x")
  
  t2.from("#right-part",{
    duration:5,
    x:600,
    opacity:0
    
  },'x')  


  t2.from("#left-part #svg-path",{
    duration:5,
    scale:.25,
    opacity:0
  },"x")
  


  var t3 = gsap.timeline({scrollTrigger:{
    trigger: "#skills",
    start: "40% 95%",
    end: "60% 70%",
    scrub: 4,
//markers: true,
}})

t3.from("#skills h1",{
  duration:3,
  scale:.25,
  opacity:0
},"page3")


t3.from("#skills .skill-left",{
  duration:5,
  x:-100,
  opacity:0
})

t3.from("#skills .skill-right",{
  duration:5,
  x:100,
  opacity:0
})


var t4 = gsap.timeline({scrollTrigger:{
  trigger: "#projects",
  start: "30% 95%",
  end: "60% 70%",
  scrub: 4,
//markers: true,
}})

t4.from("#projects h1",{
  scale:.25,
  duration:4,
  opacity:0
},)

t4.from("#projects .front1",{
  x:-100,
  duration:4,
  opacity:0
},"page4")

t4.from("#projects .front2",{
  x:100,
  duration:4,
  opacity:0
})

t4.from("#projects .front3",{
  x:-100,
  duration:4,
  opacity:0
})

var t5 = gsap.timeline({scrollTrigger:{
  trigger: "#contact",
  start: "20% 95%",
  end: "60% 70%",
  scrub: 4,
// markers: true,
}})

t5.from("#contact h3,#contact h1,#contact .form",{
  scale:.2,
  duration:4,
  opacity:0
} )

//loader 

let loader = document.getElementById("loader")
window.addEventListener('load', function(){
  this.setTimeout(function(){
  loader.style.display="none"
  },1200);
});


// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxNX46PFizwZUYlVdpatB9q4JAKIxrDarHugL8m77u9HHnpKaDMhUT8YoZLOp0CJA7D/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })



        const submit = document.getElementById("submit")
        submit.addEventListener("onclick",function(){
          alert("Thanks for Contacting us..! We Will Contact You Soon...")
        })

        // nav 
        const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')

})
}
if(navClose){
    navClose.addEventListener('click', ()=>{
      navMenu.classList.remove('show-menu')  
})}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n)=>{
    n.addEventListener('click', linkAction)
})
