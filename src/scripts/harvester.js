import { addPlant } from "./field.js"
import { usePlant } from "./field.js"
import { plantSeeds } from "./tractor.js"


export const harvestPlants = (allPlants) => {
    let totalPlants = []
    // console.log("testing this", allplants)
    for (const seed of allPlants){
        if (seed.type === "corn") {
            let number = seed.output * .5
            for (let i = 0; i < number; i++){
                totalPlants.push(seed)
            
        }
        } else {
                for (let i = 0; i < seed.output; i++){
                totalPlants.push(seed)
                
            }
        }
    }
        // console.log("total plants", totalPlants)
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
