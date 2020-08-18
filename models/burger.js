const orm = require('../config/orm.js')

const burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res)
        })
    },

    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res)
        })
    },

    update: (objColVals, condition, cb) => {
        console.log(objColVals + "inside the models");
        console.log(condition + "inside the models");
        orm.update("burgers", objColVals, condition, (res) => {
            console.log(ObjColVals + "inside the models inside the method");
            console.log(condition + "inside the modles inside the method");
            cb(res)
        })
    }

}

module.exports = burger