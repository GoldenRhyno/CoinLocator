const express = require('express');
const Search = require("../config/utils/libs/search.min");
const settingController = require('../controllers/settingController');

const router = new express.Router();

router.post('/resetSnipping', settingController.resetSnipping);
router.post('/resetFront', settingController.resetFront);
router.post('/initSnipping', settingController.initSnipping);
router.post('/initFront', settingController.initFront);
router.post('/resetAll', settingController.resetAll);

// router.get('/api', settingController.index);
// router.post('/api', settingController.create);
// router.put('/api/:id', settingController.update);
// router.delete('/api/:id', settingController.destroy);

module.exports = router;
