//change navbar style on scroll

 window.addEventListener("scroll", () => {      //here, an event of scroll is being call with the use of window.addEventListener("scroll") with the annonymous function 
    document.querySelector("nav").classList.toggle   //and with document.querySelector("nav") to select the nav element in markup"html" ("nav").classList.toggle("window-scroll") 
    ("window-scroll", window.scrollY > 0)         // in whch window-sroll is the classname used for styling the nav elemnet. which means when it scroll up using (windown.scrollY > 0) to reflect the styling on the vav element 
});                                                  //(windown.scrollY > 0) to reflect the styling on the nav element when it is scroll 0 pixel down                                            

//Show / Hide Menu Bar




window.addEventListener("scroll", () => {   
    document.querySelector("img").classList.toggle 
    ("window-scroll-img", window.scrollY > 0)  
});  






const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

});


const close  = document.getElementById("close-menu-btn");

function closeButton(){
    close.addEventListener("click", () => {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
  
    })
};
closeButton();

