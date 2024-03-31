const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
    amd: Number,
    usd: Number,
    rub: Number
});

module.exports = mongoose.model('Price', PriceSchema);
