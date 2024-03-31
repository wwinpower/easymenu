const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
    ru: String,
    am: String,
    eng: String
});

module.exports = mongoose.model('Language', LanguageSchema);
