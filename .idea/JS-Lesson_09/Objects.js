const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,
    health: {
        hygiene: 75,
        energy: 50,
        dental: 100,
        coat: 30,
        // могут быть и другие показатели
    },
}

function generateHealthReport(pet) {
    console.log(`Отчет о здоровье ${pet.name}:`)
    const health = pet.health
    console.log('Health info:', health);
    for (const key in health) {
        console.log(`${key}: ${health[key] + 10}`)
    }
}

generateHealthReport(pet)