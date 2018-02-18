'use strict';

const express = require('express');

const patientRouter = express.Router();
const { patients } = require('./patient-model');
const bodyParser = require('body-parser');

patientRouter.use(bodyParser.json());



/* ========== GET/READ ALL PATIENTS ========== */
patientRouter.get('/patient', (req, res) => {
	console.log('enter GET end point');
	patients.get()
		.then(response => {
			res.json(response.map(item => item.serialize()));
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Something went wrong in GET all' });
		});
});

/* ========== GET/READ PATIENT BY ID ========== */
patientRouter.get('/patient/:id', (req, res) => {
	console.log('enter GET/id end point');
	patients.get(req.params.id)
		.then(response => res.status(201).json(response.serialize()))
		.catch(err => {
			res.status(500).json({ message: 'Somthing went wrong: GET Patient by ID' });
		});
});

/* ========== POST/CREATE ITEM ========== */
patientRouter.post('/patient', (req, res) => {
	console.log('enter post end point');
	const requiredFields = ['name', 'medication'];

	for (let i = 0; i < requiredFields.length; i++) {
		const field = requiredFields[i];
		console.log(field);
		if (!(field in req.body)) {
			const message = `Missing \`${field}\` in request body`;
			console.error(message);
			return res.status(400).send(message);
		}
	}
	const { name, medication } = req.body;

	patients.create(name, medication)
		.then(response => {
			console.log('Response from create: ', response);
			res.status(201).json(response.serialize());
		})
		.catch(err => {
			res.status(500).json({ message: "Internal server error'});" });
		});
});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
patientRouter.put('/patient/:id', (req, res) => {
	console.log('enter put end point');
	const requiredFields = ['patientName', 'medication', 'pharmacy', 'physician', ];

	for (let i = 0; i < requiredFields.length; i++) {
		const field = requiredFields[i];
		console.log(field);
		if (!(field in req.body)) {
			const message = `Missing \`${field}\` in request body`;
			console.error(message);
			return res.status(400).send(message);
		}
	}

	const { patientName, medication, pharmacy, physician } = req.body;
	const id = req.params.id;

	patients.update(id, patientName, medication, pharmacy, physician)
		.then(response => res.status(204).json(response))
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Something went wrong: Update Patient' });
		});
});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
patientRouter.delete('/patient/:id', (req, res) => {
	console.log('enter delete end point');
	patients.delete(req.params.id)
		.then(response => res.status(204).json(response))
		.catch(err => {
			res.status(500).json({ message: 'Something went wrong: Delete Patient' });
		});
});


module.exports = patientRouter;