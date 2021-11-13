const express = require ('express')

const app = express ()


app.set('port', 5000)

//routes
app.get('/', (rew,res) => {
    res.send('Bienvenidos')
})

app.listen(app.get('port'), () =>{
    console.log(`Bienvenido a mi aplicación de node puerto ${app.get('port')}`)
})