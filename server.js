const express = require("express");
const app = express();
const path = require('path')


require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.use(express.static("build"));


app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, '/build', 'index.html'));
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  ));