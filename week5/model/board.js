const mongoose = require('mongoose');

const Board = new mongoose.Schema({
    username: { name:String, type: String, required : true,},
    content: {name:String, type: String, required : true,},
}, { versionKey: false });

Board.statics.create = function (payload) {
    const board = new this(payload);
    console.log("payload",payload)
    return board.save();
};

Board.statics.findAll = function () {
    return this.find({});
};

module.exports = mongoose.model("Board", Board);
