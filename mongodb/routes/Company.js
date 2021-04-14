var express = require('express');
var router = express.Router();

var Company_controller = require('../controllers/Company');

router.post('/create', Company_controller.Company_create);

router.get('/:Company_Id', Company_controller.Company_details);

router.put('/:Company_Id/update', Company_controller.Company_update);

router.delete('/:Company_Id/delete', Company_controller.Company_delete);


module.exports = router;