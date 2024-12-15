import { displayAllData } from "./display.js";

let gametitle = document.querySelector(".game-title");
let gameCatagory = document.querySelector(".game-catagory span");
let gamePlatform = document.querySelector(".game-platform span");
let gameStatus = document.querySelector(".game-Status span");
let gamedDescription = document.querySelector(".game-description");
let imgDeteails = document.querySelector(".img-deteails");
let gameLink = document.querySelector(".game-link")
let loading = document.querySelector(".loading")


/**
 * this function to open or close loading
 * @param {} load 
 */
function spanerloading(load){
    if(load==0){
        loading.classList.remove("d-none")
    }else if(load==1){
        loading.classList.add("d-none")
    }
    
}


/**
 * this function get game when web site open
 */
export async function getAllGames() {
    spanerloading(0);
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a57dbf9258mshec4394e6d8fd288p132018jsn696aeecaa4eb',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg",options );

if (response.ok) {
const result = await response.json();
console.log(result)
displayAllData(result)
}
spanerloading(1);
}



/**
 * when i click in any catogery give games in this catogry then display it
 * @param {*} game 
 */
export async function getGameWithCategory(game) {
    
    spanerloading(0);
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a57dbf9258mshec4394e6d8fd288p132018jsn696aeecaa4eb',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`,options );

if (response.ok) {
const result = await response.json();
console.log(result)
displayAllData(result)
}
spanerloading(1);
}


/**
 * when i click in any game give me the details in this game
 * @param {*} gameId 
 */
export async function getGameDetalies(gameId) {
    
    spanerloading(0);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a57dbf9258mshec4394e6d8fd288p132018jsn696aeecaa4eb',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,options );

if (response.ok) {
const result = await response.json();

console.log(result)
gametitle.innerHTML = `Title: ${result.title}`;
gameCatagory.innerHTML=`${result.genre}`;
gamePlatform.innerHTML=`${result.platform}`;
gameStatus.innerHTML=`${result.status}`;
gamedDescription.innerHTML=`${result.description}`;
imgDeteails.setAttribute('src',`${result.thumbnail}`)
gameLink.setAttribute("href",`${result.game_url}`)
}
spanerloading(1);

}









