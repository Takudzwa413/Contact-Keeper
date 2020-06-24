const mongoose = request('mongoose');
const config = require('config');
const db = config.get('mongooseURI');


const connectDB =() =>{
    mongoose.connect(db,{
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(()=> console.log('MongoDB connected'))
    .catch(err => {
        console.log(err.message);
        process.exit(1);
    });

};
module.exports =connectDB;