const aboutIcon = document.querySelector(".about-window");
const closeBtns = document.querySelectorAll(".close-btn");
const folders = document.querySelectorAll(".folder");
const ventanas = document.querySelectorAll(".window");
const educationBtns = document.querySelectorAll(".edu-btn");
const educationAreas = document.querySelectorAll(".education-area");
const projects = document.querySelectorAll(".project");
const projectBtn = document.querySelectorAll(".nav-obj");
const marquee = document.getElementById("project-description");
const footerBtn = document.getElementById("footer-btn");


//CLOSE BUTTONS
closeBtns.forEach(function (btn){
    btn.addEventListener("click", function(e) {
    let currentParent= e.currentTarget.parentElement.parentElement;
    currentParent.classList.toggle("hide")
    currentParent.classList.remove("top")

    });
   });

    //Select folders

    $('.window').click(function toFront(){
        $('.window').css('zIndex',2);
        $(this).css('zIndex',900);
    });

//OPEN FOLDERS
let prevSelected = null;

folders.forEach(function (folder){
    let btn = folder.querySelector(".folder-btn");
    btn.addEventListener("click", function(){
        let selectedClass= (folder.id +"-window");
        for (let i of ventanas) {
            i.style.zIndex = 2;
            if (i.classList.contains(selectedClass)){
                i.classList.remove("hide");
                i.style.zIndex = 999;
                prevSelected = i

            }
            //return selected;
        }
        prevSelected.style.zIndex = 100;
    })
})
//education
// DESPLEGABLE
educationBtns.forEach(function (btn){
btn.addEventListener("click",function(){
    let selectedClass= (btn.id + "-area");
    let selectedCategory = document.getElementById(selectedClass);
    educationBtns.forEach(function(item){
        if(item!== btn){
            let selectedClass2 = (item.id + "-area");
            let selectedCategory2= document.getElementById(selectedClass2);
            selectedCategory2.classList.add("hide")
        }
    })
    selectedCategory.classList.remove("hide")
    })
})

//DISPLAY PROJECTS

let descripciones = {
    1: "NFT website layout using HTML and SASS",
    2: "Health app. Landing page and web animations",
    3: "Helped develop mobile version of the app",
    4: "Graphic design portfolio. JS / CSS",
    5: "Wordpress ONG donation site linked with Mercado Pago",
    6: "Digital menu powered by HTML, CSS, JS",
    7: "Institutional site for auto-parts company",
    8: "Newsletter-type website for local soccer organization. Wordpress",
    9: "React Redux app integrating an API to create a superHero Team",
    10: "3D CSS interactive cube",
    11: "NFT Auction landing and FAQS site"
}
projectBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        let selectedClass= (btn.id +"-display");
        switch(btn.id){
            case "pr1":
                marquee.textContent = descripciones[1]  
                break;
            case "pr2":
                marquee.textContent = descripciones[2]
                break;
            case "pr3":
                marquee.textContent = descripciones[3]
                break;
            case "pr4":
                marquee.textContent = descripciones[4]
                break;
            case "pr5":
                marquee.textContent = descripciones[5]
                break;
            case "pr6":
                marquee.textContent = descripciones[6]
                break;
            case "pr7":
                marquee.textContent = descripciones[7]
                break;
            case "pr8":
                marquee.textContent = descripciones[8]
                break;
            case "pr9":
                marquee.textContent = descripciones[9]
                break;
            case "pr10":
                marquee.textContent = descripciones[10]
                break;
            case "pr11":
                marquee.textContent = descripciones[11]
                break;
        }
       
        projectBtn.forEach(function(item){
            if(item!== btn){
                let selectedClass2= (item.id + "-display");
                let selectedProject2= document.getElementById(selectedClass2);
                selectedProject2.classList.add("hide")
                
            }
        })
        for (let i of projects){
            if (i.classList.contains(selectedClass)){
                i.classList.remove("hide")
            }
        }
        })
})

// DRAGGABLE

$(function() {
  $( ".draggable" ).draggable();
} );

//DELETE
footerBtn.addEventListener("click", function(){
    alert("This will delete the whole page")
    confirm("Are you sure you want to delete the page?")
    document.querySelector(".deleted").classList.remove("hide");
    document.querySelector(".black-screen").classList.add("black-screen-animation")

})


