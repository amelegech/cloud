const express = require('express');
const connect_MyDB = require('./config/MyDB');
const path =require('path');
const cors = require('cors')
const app = express();


app.use(cors());
//connect to (MyDB)  database
connect_MyDB();


//init middleware for the user route and the User information
app.use(express.json({extended: false }))


//define Routers
app.use('/signin', require('./routes/users'))


app.use('/login', require('./routes/auth'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));