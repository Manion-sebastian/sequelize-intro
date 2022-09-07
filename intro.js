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
        console.log(newUser)
        // READ
        // UPDATE
        // DESTROY
    } catch(err) {
        console.warn(err)
    }
}

userCRUD()