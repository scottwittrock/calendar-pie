import express from 'express';
var cors = require('cors')
// rest of the code remains same
const app = express();
const PORT = 8000;
app.use(cors({
  origin: ['http://localhost:8100', 'https://one.scottwittrock.com'],
}));

const Blync = require('./blync');
var device = Blync.getDevice(0);

app.get('/', (req, res) => {
  device.sendCommand(0, 0, 0, false, false);
  res.end();
});


app.get('/test', (req, res) => {
  res.end();
});

app.get('/red', (req, res) => {
  device.sendCommand(255, 0, 0, false, false);
  res.end();
});

app.get('/orange', (req, res) => {
  device.sendCommand(255, 165, 0, false, false);
  res.end();
});

app.get('/green', (req, res) => {
  device.sendCommand(0, 255, 0, false, false);
  res.end();
});

app.get('/blue', (req, res) => {
  device.sendCommand(0, 0, 255, false, false);
  res.end();
});


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});