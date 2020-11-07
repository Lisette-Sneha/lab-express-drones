const express = require('express');
const Drone = require('../models/Drone');

const router = express.Router();

router.get('/drones', (req, res, next) => {
	Drone.find()
		.then((drones) => {
			res.json(drones);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/drones/create', (req, res, next) => {});

router.post('/drones/create', (req, res, next) => {
	const { name, propellers, maxSpeed } = req.body;
	Drone.create({ name, propellers, maxSpeed })
		.then((response) => {
			res.json(response);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/drones/:id/edit', (req, res, next) => {
	// Iteration #4: Update the drone
	// ... your code here
});

router.put('/drones/:id/edit', (req, res, next) => {
	const { name, propellers, maxSpeed } = req.body;
	Drone.findByIdAndUpdate(
		{ _id: req.params.id },
		{ name, propellers, maxSpeed }
	)
		.then((drone) => {
			res.json({ message: `${drone.name} was updated successfully` });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post('/drones/:id/delete', (req, res, next) => {
	// Iteration #5: Delete the drone
	// ... your code here
});

module.exports = router;
