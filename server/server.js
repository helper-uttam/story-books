const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


const msg = (userNumber, bodyOfMsg) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    client.messages 
      .create({ 
         body: bodyOfMsg, 
         from: `whatsapp:+${process.env.FROM}`,       
         to: `whatsapp:+${userNumber}` 
       }) 
      .then(message => console.log(message)) 
      .done();

}

app.use(cors());
app.use(express.json());
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.axnkt.mongodb.net/assignment?retryWrites=true&w=majority`;
mongoose.connect(url, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB is conected');
});

const storyRouter = require('./routes/stories');
const userRouter = require('./routes/users');

app.use('/stories', storyRouter);
app.use('/users', userRouter);

//twilio endpoint
app.post('/:to', (req, res) => {
    msg(req.params.to, req.body.story);
    res.send('msg sent')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
