/*
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

generateHealthReport(pet)*/

/*const student = {
    firstName: 'Igor',
    lastName: 'Budnitski',
    age: 37,
    isMarried: true,
    scores: {
        science: 98,
        history: 89,
        math: 75,
        politics: 100,
        biology: 78
    }
}*/

// console.log(student);

/*for (const studentKey in student) {
    console.log(`${studentKey} : ${student[studentKey]}`)
}*/

/*
const library = {
    fantasy: 300,
    scienceFiction: 150,
    mystery: 200,
    nonFiction: 90
}


for (const genre in library) {
    console.log(`${genre}: ${library[genre]} книг`)
}
*/

/*const studyTimer = {
    topic: 'Web Development',
    hoursSpent: 0,
    // Метод для добавления времени учебы
    addStudyTime(hours) {
        studyTimer.hoursSpent += hours;
    }
}

console.log(studyTimer);
studyTimer.addStudyTime(100);
console.log(studyTimer);

const alphaStation = {
    researchData: {
        minerals: 'Iron',
        atmosphere: 'Nitrogen'
    }
}

const betaStation = {
    researchData: alphaStation.researchData
}

alphaStation.researchData.atmosphere = 'Oxygen'

console.log(alphaStation, 'hahah')

console.log(alphaStation.researchData.atmosphere)
console.log(betaStation.researchData.atmosphere)*/

const robot = {
    name: "TaskBot",
    batteryLevel: 100,

    getBatteryLevel() {
        console.log(robot.batteryLevel);
        return robot.batteryLevel;
    }
}

robot.getBatteryLevel()  // Возвращает текущий уровень заряда