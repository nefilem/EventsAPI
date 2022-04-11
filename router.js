const express = require('express');
const router = express.Router();
const eventsdb = require('./eventsDBController');

const baseurl = "/EventsDB"

router.post(baseurl + '/create', eventsdb.create);
router.put(baseurl + '/:id', eventsdb.update);
router.get(baseurl + '/getRandomEvents', eventsdb.getRandomEvents)
router.get(baseurl + '/search/:field/:value', eventsdb.search);
router.get(baseurl + '/:id',eventsdb.show);
router.get(baseurl, eventsdb.index);
router.delete(baseurl + '/deleteAll', eventsdb.deleteAll);
router.delete(baseurl + '/:id', eventsdb.delete);

module.exports = router;