const mongoose = require('mongoose');


const logsSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    shipBroken: Boolean
},
{ timestamps: true }
);

const Logs = mongoose.model('Logs', logsSchema);

module.exports = Logs;