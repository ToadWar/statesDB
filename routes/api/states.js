const express = require('express');
const router = express.Router();
const statesController = require('../../controllers/statesController');
//const path = require('path');


router.route('/')
    .get(statesController.getAllStates)
  //  .post(statesController.createNewFunFact)
   // .patch(statesController.updateFunFact)
   // .delete(statesController.deleteFunFact);

   router.route('/?contig=true' || '/?contig=false')
  //      .get(statesController.getContig);
  //  router.route('/:id')
    router.route('/:state')
        .get(statesController.getState);
    router.route('/:state/capital')
        .get(statesController.getCapital);
    router.route('/:state/nickname')
        .get(statesController.getNickname);
    router.route('/:state/population')
        .get(statesController.getPopulation);
    router.route('/:state/admission')
        .get(statesController.getAdmission);

module.exports = router;
