const db = require('./models')

async function createToy () {
    try {
        const [pet, petCreated] = await db.pet.findOrCreate({
            where: {
                name: 'Silly May',
                species: "Mini Aussie",
                userId: 2
            }
        })

        const [toy, toyCreated] = await db.toy.findOrCreate({
            where: {type: 'Stinky Bear', color: 'Brown'}
        })

        await pet.addToy(toy)
        console.log(`${toy.type} added to ${pet.name}`)
    } catch(error) {
        console.log(error)
    }
}

// createToy()