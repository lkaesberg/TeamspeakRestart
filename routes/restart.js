const express = require('express');
const {getStatus} = require("./status");
const router = express.Router();
const {execSync} = require("child_process");

router.get('/', function (req, res, next) {
    if (!getStatus()) {
        try {
            execSync("service ts3 restart")
            res.send(true.toString())
        } catch (e) {
        }
    }
    res.send(false.toString())
});

module.exports = router;