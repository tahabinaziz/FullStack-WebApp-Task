const express = require('express');
const router = express.Router();
const controller = require('./controller');



/*Get list of all shirts */
router.post('/',controller.postShirts);

/*Get list of all shirts */
router.get('/',controller.getShirts);

/*Export  Router*/
module.exports = router;