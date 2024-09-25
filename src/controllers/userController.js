var User = require('../models/userModel');

exports.getUser = async (req,res) =>{
    /* 
        #swagger.tags = ['Listar usuário']
     */
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
};

exports.create = (req,res) => {
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );
    user.save()
        .then(res.status(201).send(user.toJSON()))
        .catch((error) =>{
            res.status(500).send({message: `${error.message} - Falha ao cadastar usuário.`})
        })
};

exports.details = async (req, res) =>{
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
        
    try {
        const result = await User.findByIdAndUpdate(id, {name:name, age:age})
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await User.findByIdAndDelete(id)
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
}
