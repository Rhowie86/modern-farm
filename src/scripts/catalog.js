import { harvestPlants } from "./harvester.js"



export const catalog = (plant) => {
        return `
        <section>
            <p>${plant.type}</p>
        </section>
        `
    }

