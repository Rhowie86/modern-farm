import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"


export const harvestPlants = (plants) => {
    let totalPlants = []

    for (const seed of plants){
        if (seed.type === "Corn") {
            let number = seed.output / 2
            for (let i = 0; i < number; i++){
                totalPlants.push(seed)
            
        }
        } else {
                for (let i = 0; i < seed.output; i++){
                totalPlants.push(seed)
                
            }
        }
    }

        return totalPlants
                
    }

        





//     let plantObj;
    
//     for (const plant of allPlants){
//         plantObj = plant.output
//         // console.log("plant?", plantObj)
//         totalPlants.push(plant * plantObj)
//         // console.log("not a number", totalPlants)
//     }
    
//     return totalPlants

// }
