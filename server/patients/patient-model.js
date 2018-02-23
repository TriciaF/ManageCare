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

	update: function(_id, patientName=null, _medication=null) {
		console.log('enter update function in model: ', _id, patientName, _medication);

		if (_medication){
			console.log('Enter Patients:Update');
			const meds = _medication.map(item => {
				return item;
			});
			const updateObj = {
				name: patientName,
				medication: meds
			};
			console.log(updateObj);
			return Patients
				.findByIdAndUpdate(_id, { $set: updateObj });
		} 
    
		else {
			return Patients.update({name: patientName}, { $pull: { medication: { _id: _id } }}, { safe: true, multi:true });
		}
	},

	delete: function(_id) {
		console.log('Enter Patients:Delete id ');
		return Patients.findByIdAndRemove(_id);

	}

};

module.exports = { patients };