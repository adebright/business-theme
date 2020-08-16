/**
 ** Project : ACE AFRICA INTERFACE LIBRARY
 ** Author  : Adeleke Bright 
 ** Description :  This library is built to allow easy and fast product development for 
 **    ACE AFRICA
**/
const AIL = {} 
AIL.selector = e => Array.from(document.querySelector(e))
AIL.selectAll = e => Array.from(document.querySelectorAll(e))

AIL.toggle = (function(target , content , errorHandler  , ...icons) {
    try {
        let triggers = AIL.selectAll(target) 
        let toggleAbleContents = AIL.selectAll(content)
        if (triggers.length < 1) throw new Error("The element is not available") 
        triggers.map((trigger , i) => {
            trigger.addEventListener("click" , e => { 
                let currentIcons = trigger.classList
                toggleAbleContents.filter((e , j) => j !== i).map(toggleable => toggleable.classList.remove("active"))
                toggleAbleContents[i].classList.toggle("active") 
                if (icons.length > 0 && currentIcons.contains("fa")){
                   trigger.classList.toggle("fa-chevron-down")
                   trigger.classList.toggle("fa-chevron-right")
                }
            })
        })
    }catch(error){
        errorHandler(error.message) 
        return 
    }
})(".tabber" , ".tab-content" , console.error , "fa fa-chevron-down") 


var Mobile = /** @class */ (function () {
    function Mobile(element) {
        this.element = element;
    }
    Mobile.prototype.toggle = function (event) {
        var target = event.target.classList;
        if (target.contains("toggler-icon")) {
            Mobile.root.classList.toggle("mobile-hide");
            console.log(event.target)
            target.toggle("fa-bars")
            target.toggle("fa-close")
        }
    };
    Mobile.prototype.addEventListener = function (type, e) {
        return addEventListener(type, e);
    };
    Mobile.root = document.querySelector(".para");
    
    return Mobile;
}());

var mobileNav = new Mobile("#navbar-toggler");
mobileNav.addEventListener("click", function (event) {
    mobileNav.toggle(event);
});
// const users = [
//     {
//         name : "Adeleke Bright" , 
//         role : "Software Architect" , 
//         gender : "Male" , 
//         avatar : "images/kids.jpg"
//     } , 
//     {
//         name : "Odun Ipenko" , 
//         role : "Software Developer" , 
//         gender : "Male" , 
//         avatar : "images/oldman.jpg"
//     } , 
//     { 
//         name : "Arole Ipenko" , 
//         role : "System Administrator" , 
//         gender : "Female" , 
//         avatar : "images/gummy.jpg"
//     }
// ]
// let testimonialArea = document.querySelector(".testimonial-display")
// let counter = 0 
// const launchFirstSlide = ((parent) =>{
//     testimonialArea.innerHTML = 
//     ` 
//     <blockquote>
//         <span class="fa fa-quote-left blue-text"></span>
//         <p>${users[0].role}
//         </p>
//         <figure>
//             <img class="img-circle" src="${users[0].avatar}" alt="" title="">
//             <figcaption>${users[0].name}</figcaption>
//         </figure>
//     </blockquote>
//     <div class="flex"> 
//         <p> <i class="white-text fa fa-chevron-left"></i> Previous </p>
//         <p>Next <i class="white-text fa fa-chevron-right"></i></p>
//     </div>
//     `
//     testimonialArea.classList.add("testimonial-active-animated")
//     return parent
// })(testimonialArea)

// const activeSlide = () => {
//     // testimonialArea.classList.add("testimonial-active-animated")
//     testimonialArea.innerHTML = 
//     ` 
//     <blockquote>
//         <span class="fa fa-quote-left blue-text"></span>
//         <p>${users[counter].role}
//         </p>
//         <figure>
//             <img class="img-circle" src="${users[counter].avatar}" alt="" title="">
//             <figcaption>${users[counter].name}</figcaption>
//         </figure>
//     </blockquote>
//     <div class="flex"> 
//         <p> <i class="white-text fa fa-chevron-left"></i> Previous </p>
//         <p>Next <i class="white-text fa fa-chevron-right"></i></p>
//     </div>
//     `
//     setTimeout(() => {
//         testimonialArea.classList.add("testimonial-active-animated")
//     })
//     return parent
// }
// let nextButton = document.querySelector(".fa-chevron-right") 

// window.addEventListener("click" , event => {
//     if (event.target.classList.contains("fa-chevron-right")){
//         console.log(counter)
//         if (counter === users.length - 1) {
//             counter = 0
//             activeSlide()
//         } else {
//             counter++
//             activeSlide()
//         }
//     }else  if (event.target.classList.contains("fa-chevron-left")){
//         console.log(counter)
//         if (counter === 0) {
//             counter = users.length - 1
//             activeSlide()
//         } else {
//             counter--
//             activeSlide()
//         }
//     }
// })

AIL.modal = (function(target , content , closer ,  errorHandler ){
    try {
        let triggers = AIL.selectAll(target) 
        let contents = AIL.selectAll(content)
        let closers  = AIL.selectAll(closer)
        if (triggers.length < 1) throw new Error("The element is not available")
        triggers.map((trigger , i) => {
            trigger.addEventListener("click" , e => { 
                let currentContent = contents[i]
                currentContent.style.display = "block"
                let modalContent = currentContent.firstElementChild
                let contentWidth = Number(modalContent.getAttribute("data-modal-content-width"))
                let distanceFromTop = Number(modalContent.getAttribute("data-modal-content-distance-from-top"))
                modalContent.style.width = contentWidth + "%"
                modalContent.style.margin = `${distanceFromTop}% auto`
                closers[i].addEventListener("click" , e => {
                    currentContent.style.display = "none"
                })
            })
        })
    }catch(error){
        errorHandler(error.message) 
        return 
    }
})(".modal-trigger" , ".modal" , ".close" ,  console.error)