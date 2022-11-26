const mongoose = require ("mongose");

mongoose.connect("mongodb://localhost:27017/momixsignup",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() =>{
    console.log('coonection successful');
}).catch((e) => {
    console.log('no connection');
})