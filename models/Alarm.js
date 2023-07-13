const mongoose = require('mongoose');

const alarmSchema = new mongoose.Schema({
	time: {
		type: String,
		required: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	description: {
		type: String
	}
});

const Alarm = mongoose.model("Alarm", alarmSchema);

module.exports = Alarm;