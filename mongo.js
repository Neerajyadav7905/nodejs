const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userdata', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  console.log('Connected to database');
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
  });
  const User = mongoose.model('User', userSchema,'signup');
  const newUser = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 26
  });
  try {
    await newUser.save();
    console.log('User saved successfully!');
    // const user = await User.findOne({});
    // console.log(user);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
});

