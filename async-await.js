const axios = require('axios')
const url = 'https://swapi.dev/api/people/?search=Leia'

// async/await and dot then are interchangable in js

// axios call handling the promice with the dot then sytax
// const promise = axios.get(url)
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(console.warn)

    // dont nest dot thens, its callback hell.
// async function myAsynchfunction () {}
const fetchStarwars = async () => {
    try {
        const response = await axios.get(url)
        console.log(response.data)
    } catch(err) {
        console.warn(err)
    }
}

// try {} catch() {} is like if else.

// fetchStarwars()

// CONFIG NOTES FOR SEQUELIZE
// dialect = postgres
// remove username and password
// database = the name of database

// sequelize db:create will create the db under db in config.