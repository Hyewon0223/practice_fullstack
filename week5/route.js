const router = require('express').Router();
const Board = require('./model/board');

router.get('/', async (req, res) => {
    res.send(await Board.findAll().exec());
});

router.post('/', async (req, res) => {
    const response = await Board.create({ username: req.body.username, content: req.body.content})
    console.log("response",response)
    res.send(await Board.create(req.body));
});
module.exports = router;
