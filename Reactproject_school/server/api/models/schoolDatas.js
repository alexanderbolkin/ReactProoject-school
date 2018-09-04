const mongoose = require('mongoose')
const SchoolDataSchema = new mongoose.Schema({
    school_id:{type: Number,required: true},
    year: {type: Number,required: true},
    week: {type: Number,required: true},
    month: {type: Number,required: true},
    elect_eur: { type: Number, required: true},
    elect_kwh: {type: Number,required: true},
    heating_eur: { type: Number, required: true},
    heating_kwh: { type: Number, requried: true},
    water_eur: {type: Number,required: true},
    water_litres: {type: Number, required: true},


    
});
const SchoolDataSchema = module.exports = mongoose.model('SchoolData',SchoolDataSchema);