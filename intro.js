const db = require('./models')

// db.user.sequelizeMethod()

const userCRUD = async () => {
    try {
        // CREATE 
        const newUser = await db.user.create({
            firstName: 'Loebita',
            lastName: 'Fawk',
            age: 42,
            email: 'ddaw@b.com'
        })
        // console.log(newUser)
        // READ
        // const allUsers = await db.user.findAll()
        // only some users.
        // const someUsers = await db.user.findAll({
        //     where: {
        //         firstName: 'Sebastian'
        //     }
        // })
        // console.log(someUsers)

        // find or create
        // array destructuring syntax
        // user = array[0] -- the user that is found or created
        // created = array[1] -- a bool of whether the user was created (true = created, false = found)
        // const [user, created] = await db.user.findOrCreate({
        //     where: {
        //         firstName: 'Laura'
        //     },
        //     // data to add if we are creating
        //     defaults: {
        //         lastName: 'Gold',
        //         age: 32,
        //         email: 'w41@b.com'
        //     }
        // })

        // console.log(user)
        // console.log(`the user was created: ${created}`)


        // UPDATE
        // update({want to update}, {what were searching for})
        // const numRowsChanged = await db.user.update({ email: 'newEmail@b.com'}, {
        //     where : {
        //         firstName: 'Sebastian'
        //     }
        // })
        // console.log(numRowsChanged)
        // DESTROY
        // const destroyUser = await db.user.destroy({
        //     where: {
        //         firstName: 'Uria'
        //     }
        // })
        // console.log(destroyUser)
    } catch(err) {
        console.warn(err)
    }
}

// userCRUD()
async function newPet() {
    try {
        const user = await db.user.findOne({
            where: {
                firstName: 'Weston'
            }
        })

        const newPet = await user.createPet({
            name: 'Shibe',
            species: 'Heckin Chonker'
        })
        console.log(newPet)
    } catch(error) {
        console.log(error)
    }
}

// newPet()

async function associatePets() {
    try {
        const options = {
            where: {
                name: 'Simba',
                species: 'Ginger Cat'
            },
            defaults: {
                description: 'Traumatized'
            }
        }

        const [pet, created] = await db.pet.findOrCreate(options)

        const user = await db.user.findOne({
            where: {
                firstName: 'Weston'
            }
        })

        await user.addPet(pet)
        console.log(`user ${user.firstName} is the owner of ${pet.name}`)
    } catch(error) {
        console.warn(error)
    }
}

// eager loading. query the db one time -- includes parent record. 

async function eagerBeaver() {
    try {
      // find everyone!
      const users = await db.user.findAll({
        // includes any records of pet, array so we can for each.
        include: [db.pet]
      })
      // users will have a .pets key with an array of pets
      users.forEach(user=>{
        console.log(`${user.firstName}'s pets:`)
        // nested forEach! 
        user.pets.forEach(pet=>{
            console.log(pet.name)
        })
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  eagerBeaver()