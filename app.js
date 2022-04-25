const express = require('express')
const app = express()
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get('/', (req,res) => {
    res.send('Hello World')
})

//Con esto inicializamos esta app
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})


