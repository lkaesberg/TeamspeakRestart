var express = require('express');
var router = express.Router();
const {execSync} = require("child_process");


const getStatus = () => {
    try {
        let res = execSync("systemctl status ts3.service | grep Active").toString()
        console.log(res)
        return res.includes("active");

    } catch (err) {
        console.log(err)
        return false
    }
}

router.get('/', function (req, res, next) {
    res.send(getStatus().toString());
});

module.exports.getStatus = getStatus
module.exports = router;
