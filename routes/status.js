var express = require('express');
var router = express.Router();
const {execSync} = require("child_process");


module.exports.getStatus = getStatus = function () {
    try {
        let res = execSync("service ts3 status | grep Active").toString()
        return res.includes("active");

    } catch (err) {
        return false
    }
}

router.get('/', function (req, res, next) {
    res.send(getStatus().toString());
});
module.exports.statusRouter = router;
