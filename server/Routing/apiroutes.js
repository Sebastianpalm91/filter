require('dotenv').config();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI,  { useNewUrlParser: true },  (err) => {
    const cursor = db.collection().find({}, { _id: false, Fname: true, Sname: true });
       cursor.each(function(err, doc)
       {
           if(err) throw err;
           console.log(doc);

       });
    console.log('connected to mongoDB');
})
