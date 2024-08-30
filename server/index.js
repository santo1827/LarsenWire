const express = require('express');
const smallFrontMaterials = require('./functions/smallfront');
const app = express()

app.get('/', (req, res) => {
    res.json({message:'Hello World!'})
})

app.post('/getwirecount', async(req, res) => {
    try{
        const numberoffronts = req.query.numberoffronts;
        const dimensions = req.query.dimensions;
        const response = smallFrontMaterials(numberoffronts, dimensions)
        res.send(response)
    }
    catch{
        console.error(error)
    }
})

app.listen(5000, () => console.log(`Server started on port 5000`))