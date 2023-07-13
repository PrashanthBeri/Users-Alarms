const User = require('../models/User');
const fetchUsers = async (req, res) => {
  res.send("fertxhing users");
};

const fetchUsersAlarms = async (req, res) => {
	res.send("fetching alarms");
}

const createUser = async (req, res) => {
	try{
		const newUser = new User(req.body);
		await newUser.save();
		return res.status(200).json({msg:"User is successfully created"});
	} catch(error) {
		console.log(error);
		return res.status(500).json({error: error});
	}
};

const getUser = async (req, res) => {
	try {
		console.log("req", req.body)
		const user = await User.find({_id: req.body._id});
	  return res.status(200).json({user: user});
	} catch (error) {
		return res.status(400).json({error: error, msg: "Error in fetching User"});
	}
};

module.exports = { fetchUsers, fetchUsersAlarms, createUser, getUser };