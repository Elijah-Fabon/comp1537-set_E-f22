const express = require('express');
const app = express();

app.listen(5000, (err) => {
  if (err) console.log();
  console.log('Server is running on port 5000');
});


app.get('/', (req, res) => {
  res.send('Hello World');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const unicornsSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  loves: [String],
  weight: Number,
  gender: String,
  vampire: Number,
  vaccinated: Boolean
});

const unicornModel = mongoose.model('unicorns', unicornsSchema);


app.get('/unicorns', (req, res) => {
  unicornModel.find({ gender: "m" }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/filteredUnicorns', (req, res) => {
  console.log(req.body)
  unicornModel.find({ name: req.body.unicornNameFromHTTPbody }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/filteredbyweightUnicorns', (req, res) => {
  console.log(req.body)
  unicornModel.find({ weight: {$gte: req.body.lowerBound}, weight: {$lte: req.body.upperBound} }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/filteredbyfoodUnicorns', (req, res) => {
  console.log(req.body)
  unicornModel.find({ $or: [{loves: req.body.apple}, {loves: req.body.carrot}] }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});


app.use(express.static('./public'));