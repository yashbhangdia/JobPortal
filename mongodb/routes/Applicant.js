var express = require('express');
var router = express.Router();

var Applicant_controller = require('../controllers/Applicant');

router.get('/test', Applicant_controller.test);

router.post('/create', Applicant_controller.Applicant_create);

router.get('/:name', Applicant_controller.Applicant_details);

router.put('/:name/update', Applicant_controller.Applicant_update);

router.delete('/:name/delete', Applicant_controller.Applicant_delete);


module.exports = router;