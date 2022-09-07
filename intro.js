const db = require('./models')

// db.user.sequelizeMethod()

const userCRUD = async () => {
    try {
        // CREATE 
        // const newUser = await db.user.create({
        //     firstName: 'Loebita',
        //     lastName: 'Fawk',
        //     age: 42,
        //     email: 'ddaw@b.com'
        // })
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
        // UPDATE
        // update({want to update}, {what were searching for})
        // const numRowsChanged = await db.user.update({ email: 'newEmail@b.com'}, {
        //     where : {
        //         firstName: 'Sebastian'
        //     }
        // })
        // console.log(numRowsChanged)
        // DESTROY
        const destroyUser = await db.user.destroy({
            where: {
                firstName: 'Uria'
            }
        })
        console.log(destroyUser)
    } catch(err) {
        console.warn(err)
    }
}

userCRUD()