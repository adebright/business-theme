/**
 ** Project : ACE AFRICA INTERFACE LIBRARY
 ** Author  : Adeleke Bright 
 ** Description :  This library is built to allow easy and fast product development for 
 **    ACE AFRICA
**/
const AIL = {} 
AIL.selector = e => Array.from(document.querySelector(e))
AIL.selectAll = e => Array.from(document.querySelectorAll(e))
/**
 * The toggle method takes 3 arguments
 */
AIL.toggle = (function(target , content , errorHandler  , ...icons) {
    try {
        let triggers = AIL.selectAll(target) 
        let toggleAbleContents = AIL.selectAll(content)
        if (triggers.length < 1) throw new Error("The element is not available")
        //Attach an event listener on all toggle triggers on the page 
        triggers.map((trigger , i) => {
            trigger.addEventListener("click" , e => { 
                let currentIcons = trigger.classList
                toggleAbleContents.filter((e , j) => j !== i).map(toggleable => toggleable.classList.remove("active"))
                toggleAbleContents[i].classList.toggle("active") 
                if (icons.length > 0 && currentIcons.contains("fa")){
                   //let newClass = currentIcons.contains(icons[0]) ? "fa fa-chevron-right tabber" : "fa fa-chevron-down tabber" 
                   //    trigger.classList = []
                   //    trigger.setAttribute("class" , newClass)
                   trigger.classList.toggle("fa-chevron-down")
                   trigger.classList.toggle("fa-chevron-right")
                }
            })
        })
    }catch(error){
        errorHandler(error.message) 
        return 
    }
})(".tabber" , ".tab-content" , console.log , "fa fa-chevron-down") 

