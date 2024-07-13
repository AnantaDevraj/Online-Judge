const express = require('express');// required express
const app = express();

require('dotenv').config(); // envoirnment variable
const PORT = process.env.PORT || 8080;

app.get('/ping', (req,res)=>{
    res.send('PONG');
});

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
})
