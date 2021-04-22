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

let projectDescriptionOne = "3D CSS interactive cube";
let projectDescriptionTwo= "Restaurant menu with dinamically added data.";
let projectDescriptionThree = "Wordpress ONG donation site linked with Mercado Pago"
projectBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        let selectedClass= (btn.id +"-display");
        let selectedProject = document.getElementById(selectedClass)
        if(selectedProject.id == "pr2-display"){
            marquee.textContent = projectDescriptionOne
        }
        if(selectedProject.id == "pr3-display"){
            marquee.textContent = projectDescriptionThree
        }
        else{
            marquee.textContent = projectDescriptionTwo
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


