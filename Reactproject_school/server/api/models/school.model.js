// const { mongoose } = require('../../config');
// const mongoose = require('mongoose')
// const SchoolSchema = new mongoose.Schema({
//     schoolName: {
//         type: String,
//         required: true
//     },
// },
//     {
//         collection:'school'
//     });
// const School = mongoose.model('School', SchoolSchema);
// module.exports = School

const { mongoose } = require('../../config');
const mongoosePaginate = require('mongoose-paginate');

let SchoolSchema = new mongoose.Schema({
    schoolName:{
        type:String,
        required:true
    }
    
});

SchoolSchema.plugin(mongoosePaginate);
const School = mongoose.model('School', SchoolSchema);

module.exports = School;