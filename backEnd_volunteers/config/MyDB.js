const mongoose = require('mongoose');
const config = require('config');
const myDB = config.get('mongoURI');

const connect_MyDB = async () => {
    try {
        await mongoose.connect(myDB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('my-mongoDb is connected...')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }


    // mongoose.connect(myDB,{
    //     useNewUrlParser:true,
    //     useCreateIndex:true,
    //     useFindAndModify:false
    // })
    // .then(()=> console.log('mongoDB connected')) //return object
    // .catch(err =>{
    //     console.error(err.message)
    //     process.exit()
    // })
}

module.exports = connect_MyDB;