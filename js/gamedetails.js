export let closeGameDetails =  document.getElementById("close-game-details");
export let gameDetails = document.getElementById("game-details");
export let home = document.getElementById("home");

/**
 * this function to close section game detalis
 */
export function ClossDetails(){
        gameDetails.classList.add("d-none")
        home.classList.remove("d-none")
}

