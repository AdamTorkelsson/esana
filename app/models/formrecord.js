// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
//TODO: patientId = number
var FormRecordSchema = new Schema({
  pain: Number,
  painKillers: Number, //ändrat
  nausea: Number,
  narcosis: Number,
  dailyActivities: Number,
  routine: Number,
  satisfied: Number,
  recovery: Number,
  worstThing: String,
  worstAsset: String,
  comments: String,
  date: { type: Date, default: Date.now, required: true }
});

module.exports.FormRecordSchema = FormRecordSchema;

mongoose.model('FormRecord', FormRecordSchema);
