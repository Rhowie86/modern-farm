const allPlants = [];
let thingy = ""

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const item of seed)
        allPlants.push(item)  
    }

    else {
        allPlants.push(seed)
    }
    return allPlants
}

export const usePlant = () => {
    return allPlants.slice();
}