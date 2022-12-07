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
  if (req.body.namefilter == "true" && req.body.weightfilter == "true"){projection = {name: 1, weight: 1, _id: 0}}
  else if (req.body.weightfilter == "true"){projection = {weight: 1, _id: 0}}
  else if (req.body.namefilter == "true"){projection = {name: 1, _id: 0}}
  else {projection = {}}
  unicornModel.find({ name: req.body.unicornNameFromHTTPbody }, projection, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/filteredbyweightUnicorns', (req, res) => {
  console.log(req.body)
  if (req.body.namefilter == "true" && req.body.weightfilter == "true"){projection = {name: 1, weight: 1, _id: 0}}
  else if (req.body.weightfilter == "true"){projection = {weight: 1, _id: 0}}
  else if (req.body.namefilter == "true"){projection = {name: 1, _id: 0}}
  else {projection = {}}
  unicornModel.find({ weight: {$gte: req.body.lowerBound}, weight: {$lte: req.body.upperBound} }, projection, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/filteredbyfoodUnicorns', (req, res) => {
  console.log(req.body)
  if (req.body.namefilter == "true" && req.body.weightfilter == "true"){projection = {name: 1, weight: 1, _id: 0}}
  else if (req.body.weightfilter == "true"){projection = {weight: 1, _id: 0}}
  else if (req.body.namefilter == "true"){projection = {name: 1, _id: 0}}
  else {projection = {}}
  if (req.body.apple == "apple" && req.body.carrot == "carrot") {
    unicornModel.find({ $and: [{loves: req.body.apple}, {loves: req.body.carrot}] }, projection, (err, data) => {
      if (err) res.send(err);
      res.send(data);
    });
  } else {
    unicornModel.find({ $or: [{loves: req.body.apple}, {loves: req.body.carrot}] }, projection, (err, data) => {
      if (err) res.send(err);
      res.send(data);
    });
  }
});


app.use(express.static('./public'));