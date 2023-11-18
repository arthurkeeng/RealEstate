
const mongoose = require('mongoose')

const connection = async ( URL ) =>{
    return mongoose.connect(URL
        ).then(()=>{
            console.log('db conected successfully');
        }).catch(e=>{
            console.log('something happened');
        })
}

module.exports = connection 