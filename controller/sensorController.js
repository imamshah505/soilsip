const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../data/state.json');

// Helper: read current state
function readState() {
  const raw = fs.readFileSync(dataFile);
  return JSON.parse(raw);
}

// Helper: write new state
function writeState(newState) {
  fs.writeFileSync(dataFile, JSON.stringify(newState, null, 2));
}

// POST /api/moisture
function postMoisture(req, res) {
  const { moisture } = req.body;

  if (typeof moisture !== 'number') {
    return res.status(400).json({ message: 'Invalid moisture value' });
  }

  const state = readState();
  state.moisture = moisture;
  state.lastUpdated = new Date().toISOString();

  writeState(state);
  res.json({ message: 'Moisture data updated', moisture });
}

// GET /api/moisture
function getMoisture(req, res) {
  const state = readState();
  res.json({ moisture: state.moisture, lastUpdated: state.lastUpdated });
}

// POST /api/pump
function setPumpState(req, res) {
  const { on } = req.body;

  if (typeof on !== 'boolean') {
    return res.status(400).json({ message: 'Invalid pump state' });
  }

  const state = readState();
  state.pump = on;
  writeState(state);

  res.json({ message: `Pump turned ${on ? 'ON' : 'OFF'}` });
}

// GET /api/pump
function getPumpState(req, res) {
  const state = readState();
  res.json({ pump: state.pump });
}

module.exports = {
  postMoisture,
  getMoisture,
  setPumpState,
  getPumpState
};
