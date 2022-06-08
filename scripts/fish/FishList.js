// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"
import { mostHolyFish } from "./main.js"

export const fishList = (tacoReturnOfFunction) => { //this function builds an HTML representation of all of the fish
    // Invoke the function that you imported from the database module
    // const fishes = getFish() //dont need bc now have fish passed in as argument

    // Start building a string filled with HTML syntax
    //I made this a let instead of const
    let htmlString = '<article class="fishList">' 

    // Create HTML representations of each fish here
    for (const fish of tacoReturnOfFunction) {
        
        // Why is there a backtick used for this string?--string interpolation
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`
    return htmlString
}
