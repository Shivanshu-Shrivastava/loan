const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dataRoutes = require('./routes/data.routes')
const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/data', dataRoutes);

const PORT = 8000;

app.use(express.static(path.join(__dirname, "./build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));