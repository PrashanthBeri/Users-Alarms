const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');
const alarmRouter = require('./routes/alarm.route');
const Queue = require('bull');
const alarmController = require('./controller/alarm.controller');
const moment = require('moment');
const cron = require('node-cron');

const app = express();
app.use(express.json());

let port = 8080;

mongoose.connect('mongodb://localhost:27017/test1').then(()=>{
	console.log("Connected")
}).catch(()=>{
	console.log("Not Connected")
})

app.listen(port,()=>{
  console.log(`Server is listening on http://localhost:${port}`)
});

app.use("/user", userRouter);
app.use("/alarm", alarmRouter);

const formattedTime = (time) => {
	return moment(time, "DD-MM-YYYY hh:mm:ss").format();
};

cron.schedule('* * * * * *', async () => {
	const alarms = await alarmController.getAllAlarms();
	const time = formattedTime(new Date());
	alarms.forEach(a => {
		if(formattedTime(a.time) == time){
			console.log(`Send notification for this ${time} to this ${a.userId}`);
		}
	});
})