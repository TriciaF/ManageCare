'use strict';

const mongoose = require('mongoose');


//schema definition for the medicine database
const medicineSchema = mongoose.Schema({
	name: String,
	dosage: String,
	schedule: String,
	pharmacy: {
		name: String,
		address: String,
		phoneNumber: String
	},
	physician: {
		name: String,
		address: String,
		phoneNumber: String
	},
});

//schema definition for the pateint database
const patientSchema = mongoose.Schema({
	name: {
		firstname: String,
		lastname: String
	},
	medication: [medicineSchema]
});


//defined virtual for patient name
patientSchema.virtual('patientName').get(function() {
	return `${this.name.firstname} 
					${this.name.lastname}`.trim();

});

//defined virtual for pharmacy
medicineSchema.virtual('pharmacyInfo').get(function() {
	return `${this.pharmacy.name} 
					${this.pharmacy.address}
					${this.pharmacy.phoneNumber}`.trim();
});

// //defined virtual for physician
medicineSchema.virtual('physicianInfo').get(function() {
	return `${this.physician.name}
					${this.physician.address}
					${this.physician.phoneNumber}`.trim();
});

medicineSchema.virtual('medicationInfo').get(function() {
	return `${this.pharmacyInfo}
          ${this.physicianInfo}
          ${this.medication.name}
          ${this.medication.dosage}
          ${this.medication.schedule}`.trim();
});

// // // //defined virtual for medication
// medicineSchema.virtual('medicationInfo').get(function() {
// 	let meds = Object.assign({}, ...this.medication, {
// 		name: this.medication.name,
// 		dosage: this.medication.dosage,
// 		schedule: this.medication.schedule,
// 		physician: {
// 			name: this.medication.physician.name,
// 			address: this.mediction.physician.address,
// 			phoneNumber: this.medication.physician.phoneNumber
// 		}
// 	});
// 	// this.medication.forEach(item => {
// 	// 	meds = item;
// 	// });
// 	return meds;
// });


//serialize method for patient schema
patientSchema.methods.serialize = function() {
	return {
		id: this._id,
		name: this.patientName,
		medication: this.medicationInfo,
	};
};




//declare and export models
const Medicines = mongoose.model('Medicines', medicineSchema);
const Patients = mongoose.model('Patients', patientSchema, 'patientDb');


module.exports = { Medicines, Patients };