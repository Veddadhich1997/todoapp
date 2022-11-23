const mongoose = require('mongoose');

const CONNECTTODB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`DB connected:${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = CONNECTTODB;