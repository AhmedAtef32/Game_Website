import { getAllGames, getGameWithCategory, search, searchFun } from "./getData.js";

import { closeGameDetails, ClossDetails } from "./gamedetails.js";


let navLinks = document.querySelectorAll(".nav-link")

// show all game when i open 
getAllGames();

// this to close section game detalis
closeGameDetails.addEventListener("click", ClossDetails);


// this to remove active and add active when i press to any link
for (let i = 0; i < navLinks.length; i++) {
    
    navLinks[i].addEventListener("click",function(){

        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
        }

        navLinks[i].classList.add("active");

        getGameWithCategory(navLinks[i].innerHTML);
    })
    
}


search.addEventListener("input", searchFun)




