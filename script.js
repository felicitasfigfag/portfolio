const aboutIcon = document.querySelector(".about-window");
const closeBtns = document.querySelectorAll(".close-btn");
const folders = document.querySelectorAll(".folder");
const ventanas = document.querySelectorAll(".window");
const educationBtns = document.querySelectorAll(".edu-btn")
const educationAreas = document.querySelectorAll(".education-area")

//CLOSE BUTTONS 
 closeBtns.forEach(function (btn){
     btn.addEventListener("click", function(e) {
     let currentParent= e.currentTarget.parentElement.parentElement;
     currentParent.classList.toggle("hide")
     console.log(currentParent)
     });
 });
 
//OPEN FOLDERS

folders.forEach(function (folder){
    const btn = folder.querySelector(".folder-btn");
    btn.addEventListener("click", function(){
        let selectedClass= (folder.id +"-window");
        for (let i of ventanas){
            if (i.classList.contains(selectedClass)){
                i.classList.remove("hide")
            }
        }
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



// vamos a filtrar del array de categorias la que tenga la clase que
// buscamos. 
// La ponemos en una variable: categoria seleccionada. 
// A esa categoria le borramos el hide.
// Dsp el metodo del word, y comprobamos:
// categoriaseleccionada.id = item.id? if not:
// agregar clase hide a categorias.getelementbyid(item.id)
//
