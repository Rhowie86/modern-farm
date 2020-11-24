import { catalog } from "./catalog.js"
import { harvestPlants } from "./harvester.js"
import { usePlants } from "./field.js"



export const plantList = () => {

    const contentElement = document.querySelector(".container")
    // const allPlants = usePlant()
    let usedPlants = usePlants()
    const plantTypes = harvestPlants(usedPlants)

    console.log("total plants in PlantList.js", plantTypes)

    for (const plant of plantTypes){
        const plantHTML = catalog(plant)
        contentElement.innerHTML += plantHTML
    
    }
}