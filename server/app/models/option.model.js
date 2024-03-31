const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Price = require('./PriceSchema');

const OptionSchema = new Schema({
    name: { type: Schema.Types.ObjectId, ref: 'Language' },
    price: Price,
    default: Boolean,
    included: Boolean,
    value: Number,
    count: Number,
    units: { type: Schema.Types.ObjectId, ref: 'Unit' }
});

module.exports = mongoose.model('Option', OptionSchema);
