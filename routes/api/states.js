const express = require('express');
const router = express.Router();
const statesController = require('../../controllers/statesController');
//const path = require('path');


router.route('/')
    .get(statesController.getAllStates)
  //  .post(statesController.createNewFunFact)
   // .patch(statesController.updateFunFact)
   // .delete(statesController.deleteFunFact);

    router.route('/:id')
  //   .get(statescontroller.getState);

module.exports = router;
