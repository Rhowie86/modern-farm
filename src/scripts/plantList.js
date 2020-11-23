import { catalog } from "./catalog.js"
import { harvestPlants } from "./harvester.js"
import { usePlant } from "./field.js"



export const plantList = () => {

    const contentElement = document.querySelector(".container")
    const allPlants = usePlant()
    const plantTypes = harvestPlants(allPlants)

    console.log("total plants in PlantList.js", totalPlants)

    for (const plant of plantTypes){
        const plantHTML = catalog(plant)
        contentElement.innerHTML += plantHTML
    
    }
}