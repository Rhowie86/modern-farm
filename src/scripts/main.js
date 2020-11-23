import { createPlan } from "./plan.js"

// const yearlyPlan = createPlan();
// console.log("year plan", yearlyPlan)

import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js" 
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import { usePlant } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"
import { plantList } from "./plantList.js"

// const corn = createCorn();
// console.log("what seed is it?", corn)
// const soybean = createSoybean();
// console.log("what seed is this?", soybean)
// const asp = createAsparagus();
// console.log("what seed is it?", asp)
// const wheat = createWheat();
// console.log("what seed is this?", wheat)
// const sun = createSunflower();
// console.log("what see is it?", sun)
// const potato = createPotato();
// console.log("what seed is this?", potato)
// const plantsAdd = addPlant(createCorn());
// console.log("added a plant?", plantsAdd)
// const usedPlants = usePlant();
// console.log("plants used", usedPlants)
// const plantedSeeds = plantSeeds();
// console.log("plant seeds", plantedSeeds)

let plan = createPlan()

plantSeeds(plan)


// console.log("what the hell is going on?", testVar)
let usedPlants = usePlant()
// console.log("used plants", usedPlants)

const allThePlants = harvestPlants(usedPlants)

// let addPlants = addPlant(allThePlants)
// console.log("harvest the plants", allThePlants)

plantList()




