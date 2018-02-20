'use strict';

const { Patients } = require('./patient-schema');

const patients = {
	create: function(patientName, medication) {
		console.log('Enter Patients:create');
		const meds = medication.map(item => {
			return item;
		});
		return Patients
			.create({
				name: patientName,
				medication: meds
			});
	},

	get: function(id = null) {
		console.log('Enter Patients:Get');
		if (id === null) {
			return Patients.find();
		} else
			return Patients.findById(id);
	},

	update: function(id, patientName, medication) {

		console.log('Enter Patients:Update');
		const meds = medication.map(item => {
			return item;
		});
		const updateObj = {
			name: patientName,
			medication: meds
		};
		console.log(updateObj);
		return Patients
			.findByIdAndUpdate(id, { $set: updateObj });
	},

	delete: function(id) {
		console.log('Enter Patients:Delete');
		return Patients
			.findByIdAndRemove(id);
	}
};

module.exports = { patients };