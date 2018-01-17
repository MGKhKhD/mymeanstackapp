const express = require('express');
const router = express.Router();

const keys = require('../../configs/configs');
const mongoose = require('mongoose');
mongoose.connect(keys.MongoDBmLab);

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};
const  users=[{
    id: 1,
    name: "Ali"
},
{
id: 2,
name: "Taghi"
}];

// Get users
router.get('/users', (req, res) => {

res.json(users);
});

module.exports = router;