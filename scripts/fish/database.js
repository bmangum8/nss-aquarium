/*
Concept Checking Questions
What is the data type of the database variable?
What is the data type of the fish property?
What is the data type of the name property?
What is the data type of the size property?
What data types will the fish array contain?

  {
            image: "",
            name: "",
            species: "",
            loctaion: "",
            food: "",
            length: 0,
 },
*/

// import { mostHolyFish } from "./main"

const database = {
    fish: [
        {
            image: "",
            name: "Liz Lemon",
            species: "marlin",
            location: "Grenada",
            food: "tuna",
            length: 10,
        },
        {
            image: "",
            name: "Kenneth Parcell",
            species: "grouper",
            location: "New Orleans",
            food: "crustaceans",
            length: 3,
        },
        {
            image: "",
            name: "Tracy Jordan",
            species: "catfish",
            location: "Mississippi River",
            food: "crustaceans",
            length: 5,
        },
        {
            image: "",
            name: "Jenna Maroney",
            species: "shrimp",
            location: "New Orleans",
            food: "worms",
            length: 2,
        },
        {
            image: "",
            name: "Jack Donaghy",
            species: "sea star",
            location: "Grenada",
            food: "clams",
            length: 5,
        },
        {
            image: "",
            name: "Pete Hornberger",
            species: "rainbow fish",
            location: "Grenada",
            food: "",
            length: 6,
        },
        {
            image: "",
            name: "Criss Cross",
            species: "clam",
            location: "New Orleans",
            food: "algae",
            length: 1,
        } 
    ]
}

export const getFish = () => { 
    //mostHolyFish(fish)    //call most holyFish(fish)???
    return database.fish.map(fish => ({...fish}))
}