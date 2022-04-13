const express = require('express');
const router = express.Router();
const eventsdb = require('./eventsDBController');
const userinfo = require('./userInfoController');

const baseurl = "/EventsDB";
const userbaseurl = "/userInfo";

router.post(baseurl + '/create', eventsdb.create);
router.put(baseurl + '/:id', eventsdb.update);
router.get(baseurl + '/getRandomEvents', eventsdb.getRandomEvents)
router.get(baseurl + '/search/:field/:value', eventsdb.search);
router.get(baseurl + '/:id',eventsdb.show);
router.get(baseurl, eventsdb.index);
router.delete(baseurl + '/deleteAll', eventsdb.deleteAll);
router.delete(baseurl + '/:id', eventsdb.delete);

router.post(userbaseurl + "/register", userinfo.register);
router.post(userbaseurl + "/login", userinfo.login);

module.exports = router;