const Alarm = require("../models/Alarm");

const createAlarm = async (req, res) => {
	try{
		const newAlarm = new Alarm(req.body);
		await newAlarm.save();
		return res.status(200).json({ msg: "Alarm is successfully created" });
	} catch(error) {
		console.log(error);
		return res.status(500).json({ error: error });
	}
};

const getAlarm = async (req, res) => {
	try {
		const user = await Alarm.find({ _id: req.body._id });
	  return res.status(200).json({ alarm: Alarm });
	} catch (error) {
		return res.status(400).json({ error: error, msg: "Error in fetching Alarm Data" });
	}
};

const getAllAlarms = async () => {
	try {
		const alarms = await Alarm.find();
		return alarms;
	} catch (error) {
		return [];
	}
}

module.exports = { createAlarm, getAlarm, getAllAlarms };