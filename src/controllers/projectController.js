var Project = require('../models/projectModel');

exports.getProject = async (req, res) => {
    try {
        const result = await Project.find().populate('assignedTo');
        res.status(200). json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.create = (req, res) => {
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
    try {
        const result = await Project.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.update = async (req, res) => {
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
    const { id } = req.params;
    try {
        const result = await Project.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
