const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
    name: { type: Schema.Types.ObjectId, ref: 'Language' },
    value: String
});

module.exports = mongoose.model('Unit', UnitSchema);
