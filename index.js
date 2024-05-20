const express = require('express')
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const loginRoutes = require('./routes/login.js')

const app = express();
const PORT = 5000;
app.use(express.static("public"));
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}));
app.use('', loginRoutes);

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
})