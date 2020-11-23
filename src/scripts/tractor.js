import { addPlant } from "./field.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js" 
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createPlan } from "./plan.js"

export const plantSeeds = (plan) => {
    
       
    // console.log("what is plan?", plan)
        // for (let i = 0; i < plan.length; i++ ) {
        //     for (let plant of plan[i]) {
            const newPlan = plan.flat()
console.log("is it flat?", newPlan)
            let seedObj;
            for (let seed of newPlan) {
                switch(seed){
                    case 'Asparagus' :
                        seedObj = (createAsparagus())
                    break;   
                    case 'Corn' :
                        seedObj = (createCorn())
                    break;    
                    case 'Sunflower' :
                        seedObj = (createSunflower())
                    break;    
                    case 'Potato' :
                        seedObj = (createPotato())
                    break;    
                    case 'Soybean' :
                        seedObj = (createSoybean())
                    break;    
                    case 'Wheat' :
                        seedObj = (createWheat())
                    
                    
                                        
                }

                addPlant(seedObj)
            }

                
                    
        }                            
  

            
        
    

// let seedsToPlant = plantSeeds(createPlan())
// console.log("does the switch work?", seedsToPlant)



// loop through the child arrays in plan
// use a switch to determine plant type
// call addPlant(createCorn())