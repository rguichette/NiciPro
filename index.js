
const express = require('express');
const app = express()


app.use(express.static(process.cwd() + '/public/src'));



app.get('*', (req, res) => {
    // res.send("hello")
    res.end()
});





app.listen(3000, () => {
    console.log('App listening on port 3000!');
});