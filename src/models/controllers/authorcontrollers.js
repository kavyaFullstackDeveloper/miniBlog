
const authormodel = require('../authormodel')

const createauthor = async function(req, res) {
    let data = req.body 

    let saveddata = await authormodel.create(data)
    res.send({msg: saveddata})
}

const getauthordata = async function(req, res){
    let allauthors = await authormodel.find()
    res.send({msg: allauthors})
}

module.exports.createauthor = createauthor 
module.exports.getauthordata = getauthordata 