var User = require('../models/userModel');

exports.getUser = async (req,res) =>{
    /* 
        #swagger.tags = ['Route User']
        #swagger.summary = 'Listar usuários registrados'
        #swagger.description = 'Esse endpoint vai mostrar os usuários registrados.'
        #swagger.responses[200] = { description: 'Usuário encontrado.' }
     */
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
};

exports.create = (req,res) => {
    /*
        #swagger.tags = ['Route User']
        #swagger.summary = 'Criar novo usuário'
        #swagger.description = 'Esse endpoint vai criar um novo usuário.'
        #swagger.responses[201] = { description: 'Usuário cadastrado com sucesso.' }
        #swagger.responses[500] = { description: 'Falha ao cadastar usuário.' }
     */

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
    /*
        #swagger.tags = ['Route User']
        #swagger.summary = 'Detalhar usuário por ID'
        #swagger.description = 'Esse endpoint irá mostrar os  detalhes do usuário pelo ID'
        #swagger.responses[200] = { description: 'Usuário encontrado.' }
        #swagger.responses[500] = { description: 'Usuário não encontrado.' }
    */
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.update = async (req, res) => {
    /*
        #swagger.tags = ['Route User']
        #swagger.summary = 'Atualizar usuário por ID'
        #swagger.description = 'Esse endpoint irá atualizar usuário pelo ID'
        #swagger.responses[200] = { description: 'Usuário atualizado com sucesso.' }
        #swagger.responses[500] = { description: 'Usuário não encontrado.' }
    */
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
    /*
        #swagger.tags = ['Route User']
        #swagger.summary = 'Deletar usuário por ID'
        #swagger.description = 'Esse endpoint irá deletar o usuário pelo ID'
        #swagger.responses[200] = { description: 'Usuário deletado com sucesso.' }
        #swagger.responses[500] = { description: 'Usuário não encontrado.' }
    */
    const { id } = req.params;

    try {
        const result = await User.findByIdAndDelete(id)
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
}
