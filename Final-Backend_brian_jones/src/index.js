const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/index');
const mongoose = require('mongoose');

const app = express();
var cors = require('cors');
mongoose.connect(
  'mongodb+srv://mcga:Mcga123@mcga-cluster.ezq5f.mongodb.net/mcga?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
).then(() => {
  console.log('DB Connected!')
}).catch((error) => {
  console.log(error);
})

app.use(cors());
app.use(bodyParser.json());


app.use('/', routes);
app.listen(3001, () => {
  console.log('Server runing...');
});
