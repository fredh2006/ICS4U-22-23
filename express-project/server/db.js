const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://fredhe:<is5lhOy9hXTnP0t3>@cluster0.9ofgmo2.mongodb.net/?'

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('Database connected')).catch((err) => console.log(err));