// Modules

const express = require('express');
const axios = require('axios');
const { response } = require('express');


// Create the app
const app = express();


// Create a port
const PORT = process.env.PORT || 3000;

// Create a route
app.get('/', (req, res) => {

    axios.get('https://api.github.com/users/ajstrizzy')
    .then(response => {
        // console.log(response.data);
        const arielObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(arielObject)
        res.send(arielObject)

    })
})

app.get('/carolina', (req, res) => {

    axios.get('https://api.github.com/users/canourrea23')
    .then(response => {
        // console.log(response.data);
        const carolinaObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(carolinaObject)
        res.send(carolinaObject)

    })
})

app.get('/jaxon', (req, res) => {

    axios.get('https://api.github.com/users/jaxonnarramore')
    .then(response => {
        // console.log(response.data);
        const jaxonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(jaxonObject)
        res.send(jaxonObject)

    })
})

app.get('/ashton', (req, res) => {

    axios.get('https://api.github.com/users/swolepenguin')
    .then(response => {
        // console.log(response.data);
        const ashtonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(ashtonObject)
        res.send(ashtonObject)

    })
})

app.get('/nicole', (req, res) => {

    axios.get('https://api.github.com/users/nikkihmltn')
    .then(response => {
        // console.log(response.data);
        const nicoleObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(nicoleObject)
        res.send(nicoleObject)

    })
})

app.get('/elias', (req, res) => {

    axios.get('https://api.github.com/users/estriz27')
    .then(response => {
        // console.log(response.data);
        const eliasObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name,
            location: response.data.location
        }
        console.log(eliasObject)
        res.send(eliasObject)

    })
})







// Listen on a port
app.listen(PORT, () => {
    console.log(`You're vibing to the sounds on PORT ${PORT}`)
})