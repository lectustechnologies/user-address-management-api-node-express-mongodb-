const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const User = require('./models/User')
 const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const db = process.env.MONGO_DB;
const mongoUri = `mongodb://${host}:${port}/${db}`;

mongoose.connect(mongoUri);


const testUser = new User({
    name: "John Doe5",
    email: "john.doe5@example.com",
    phone: "123-456-7980",
    age: 30
});

testUser.save()
    .then(doc => {
        console.log('User saved:', doc);
        mongoose.disconnect();
    })
    .catch(err => {
        console.log('Error:', err);
        mongoose.disconnect();
    });