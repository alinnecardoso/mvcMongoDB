var Project = require('../models/projectModel');

exports.getProject = async (req, res) => {
    /* 
        #swagger.tags = ['Route Project']
        #swagger.summary = 'Listar projetos registrados'
        #swagger.description = 'Esse endpoint vai mostrar os projetos registrados.'
        #swagger.responses[200] = { description: 'Projeto encontrado.' }
     */

    try {
        const result = await Project.find().populate('assignedTo');
        res.status(200). json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.create = (req, res) => {
    /*
        #swagger.tags = ['Route Project']
        #swagger.summary = 'Criar novo projeto'
        #swagger.description = 'Esse endpoint vai criar um novo projeto.'
        #swagger.responses[201] = { description: 'Projeto cadastrado com sucesso.' }
        #swagger.responses[500] = { description: 'Falha ao cadastar projeto.' }
    */
    
    const { title, description, assignedTo } = req.body;
    let project = new Project(
        {
            title: title,
            description: description,
            assignedTo: assignedTo,
        }
    );
    project.save()
    .then(res.status(201).send(JSON.stringify(project)))
    .catch((err) => {
        res.status(500).send({ message: `${err.message} - Falha ao cadastrar projeto.` })
    })
}

exports.details = async (req, res) => {
    /*
        #swagger.tags = ['Route Project']
        #swagger.summary = 'Detalhar projeto por ID'
        #swagger.description = 'Esse endpoint irá mostrar os  detalhes do projeto pelo ID'
        #swagger.responses[200] = { description: 'Projeto encontrado.' }
        #swagger.responses[500] = { description: 'Projeto não encontrado.' }
    */
    try {
        const result = await Project.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.update = async (req, res) => {
    /*
        #swagger.tags = ['Route Project']
        #swagger.summary = 'Atualizar projeto por ID'
        #swagger.description = 'Esse endpoint irá atualizar projeto pelo ID'
        #swagger.responses[200] = { description: 'Projeto atualizado com sucesso.' }
        #swagger.responses[500] = { description: 'Projeto não encontrado.' }
    */
    const { id } = req.params;
    const { title, description, assignedTo } = req.body;

    try {
        const result = await Project.findByIdAndUpdate(id, {title:title, description:description, assignedTo:assignedTo})
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.delete = async (req, res) => {
    /*
        #swagger.tags = ['Route Project']
        #swagger.summary = 'Deletar projeto por ID'
        #swagger.description = 'Esse endpoint irá deletar o projeto pelo ID'
        #swagger.responses[200] = { description: 'Projeto deletado com sucesso.' }
        #swagger.responses[500] = { description: 'Projeto não encontrado.' }
    */
    const { id } = req.params;
    try {
        const result = await Project.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
