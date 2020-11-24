


const allPlants = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        // for (const item of seed)
        // allPlants.push(item) 
        // seed.forEach(seed => allPlants.push(seed)) 
        for (let i of seed){
            allPlants.push(i)
        }
        
    } else {
        allPlants.push(seed)
        return allPlants
    }
}

export const usePlant = () => {
    return allPlants.slice();
}

console.log("testing this thing in field.js", allPlants)