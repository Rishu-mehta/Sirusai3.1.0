const mongoose = require('mongoose'); 
const DB= `mongodb+srv://sirus:sirus123@cluster0.nc3qium.mongodb.net/contactus?retryWrites=true&w=majority`;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Connection to MongoDB failed:', error);
  });
  