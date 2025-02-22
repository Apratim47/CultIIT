require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Apratim47:Lockup2025@cluster0.iu952.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});
