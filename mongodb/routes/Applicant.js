var express = require('express');
var router = express.Router();

var Applicant_controller = require('../controllers/Applicant');

router.post('/create', Applicant_controller.Applicant_create);

router.post('/login', Applicant_controller.Applicant_login);

router.get('/:Applicant_Id', Applicant_controller.Applicant_details);

router.put('/:Applicant_Id/update', Applicant_controller.Applicant_update);

router.delete('/:Applicant_Id/delete', Applicant_controller.Applicant_delete);


module.exports = router;