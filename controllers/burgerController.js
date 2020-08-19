const express = require('express')
const router = express.Router()

const burger = require('../models/burger.js')

router.get('/', (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render('index', hbsObject)
    })
})

router.post('/api/burgers', (req, res) => {
    burger.create(
    ['burger_name'], 
    [req.body.burger_name], 
    (result) => {
        res.json({ id: result.insertId })
    })
})

router.put('/api/burgers/:id', (req, res) => {
    console.log(req.params.id);
    let condition = 'id=' + req.params.id
    console.log(condition + "inside burgerController");
    console.log(req.body.devoured + "inside burgerController");
    burger.update({
        devoured: req.body.devoured
    }, 
    condition, 
    (results) => {
        if (results.changedRows == 0) {
            return res.status(404).end()
        }
        else {
            res.status(200).end()
        }
    })
})

  module.exports = router;