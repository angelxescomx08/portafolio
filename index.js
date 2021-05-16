const express = require('express')
const app = express()
const path = require('path')
const puerto = process.env.PORT || 8000

app.use(express.static(path.join(__dirname,'build')))

app.get('/pdf/CV.pdf', (req, res) => res.download(path.join(__dirname,'CV.pdf')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})

app.listen(puerto,()=>{
    console.log(`Escuchando en el puerto ${puerto}`)
})