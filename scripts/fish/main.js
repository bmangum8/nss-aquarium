import { getFish } from './database.js'

import { fishList } from './FishList.js'

const allFish = getFish()

// this will console log all the fish Martin has
// for (const fish of allFish) {
//     console.log(fish)
// }


//this should console log the list of holy fish first
//fish.length with remainder operator and 3
export const mostHolyFish = () => { //no parameter bc allFish gets us the array of fish??
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of allFish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }

    }
    return holyFish
}
const holy = mostHolyFish()
console.log(holy) //shows in dev tools console. not in browser
const firstFish = fishList(holy)


//list of soldier fish second
//fish.length with remainder operator and 5
export const soldierFish = () => { //no parameter bc allFish gets us the array of fish??
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of allFish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}
console.log(soldierFish()) //shows in dev tools console. not in browser
const fighters = soldierFish()
const secondFish = fishList(fighters)



// and list of rest of fish in any order at the end
//fish.length with remainder operator not 3 and not 5
export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of allFish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}
console.log(nonHolyFish()) //shows in dev tools console. not in browser
const nonHolys = nonHolyFish()
const thirdFish = fishList(nonHolys)









/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("#fishList")
console.log(parentHTMLElement)
parentHTMLElement.innerHTML = firstFish + secondFish + thirdFish


//parentHTMLElement.innerHTML = fishList()

// parentHTMLElement.innerHTML = mostHolyFish() //does not work