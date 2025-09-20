/*
while (energy >= 0) {
    // console.log('Текущий уровень энергии: ' + energy)
    console.log(`Текущий уровень энергии: ${energy}`)
}*/

/*let energy = 10 // начальный уровень энергии робота

while (energy >= 0) {
    console.log(`Текущий уровень энергии: ${energy}`)

    if (energy === 0) {
        console.log("Робот грустит... 😢 Нужно подзарядить!")
        break // выходим из цикла, если энергия закончилась
    } else if (energy <= 3) {
        console.log("Робот начинает чувствовать усталость... 🥱")
    } else {
        console.log("Робот счастлив и бодрствует! 😊")
    }
    energy--;
}*/

const INITIAL_ENERGY = 10
const MIN_ENERGY = 0
const LOW_ENERGY_THRESHOLD = 3

let energy = INITIAL_ENERGY
while (energy >= MIN_ENERGY) {
    console.log(`Текущий уровень энергии: ${energy}`)

    if (energy === MIN_ENERGY) {
        console.log('Робот грустит... 😢 Нужно подзарядить!')
    } else if (energy <= LOW_ENERGY_THRESHOLD) {
        console.log('Робот начинает чувствовать усталость... 🥱')
    } else {
        console.log('Робот счастлив и бодрствует! 😊')
    }

    energy--
}

console.log('Программа завершена. Робот отдыхает.')

let number = 100
while (number > 49) {
    console.log(number)
    number--
}

let energy2 = 5
let name = "Robo"

let message = `${name} имеет ${energy2} единиц энергии`

console.log(message);