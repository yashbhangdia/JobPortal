const express = require("express");
const router = express.Router();
const keys = require("../config/keys");


var Applicant_controller = require('../controllers/Applicant');

router.post('/create', Applicant_controller.Applicant_create);

router.post('/login', Applicant_controller.Applicant_login);

router.get('/:aid', Applicant_controller.Applicant_details);

router.post('/:aid/update/:field', Applicant_controller.Applicant_update);

router.delete('/:aid/delete/:field', Applicant_controller.Applicant_delete);

module.exports = router;