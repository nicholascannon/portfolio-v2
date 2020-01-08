/**
 * Project API routes
 */
const router = require('express').Router();
const validate = require('validator');

const Project = require('../models/Project');

/**
 * Returns all projects in the db
 */
router.get('/', (req, res, next) => {
	Project.find()
		.then(projects => {
			return res.json([...projects]);
		})
		.catch(err => next(err));
});

/**
 * Create new project
 */
router.post('/', (req, res, next) => {
	const { name, body, tech, url } = req.body;

	if (!name || !body || !tech || tech.length === 0 || !url || !validate.isURL(url)) {
		return res.status(400).json({ msg: 'Please provide valid information about the project' });
	}

	Project.create({ name, body, tech, url })
		.then(project => res.json(project))
		.catch(err => next(err));
});

/**
 * Edit an existing project
 */
router.put('/:uuid/', (req, res, next) => {
	const { name, body, tech, url } = req.body;

	// if (!name || !body || !tech || tech.length === 0 || validate.isURL(url)) {
	// 	return res.status(400).json({ msg: 'Please provide valid information about the project' });
	// }

	Project.findByIdAndUpdate(req.params.uuid, { name, body, tech, url }, { new: true })
		.then(project => res.json(project))
		.catch(err => next(err));
});

/**
 *
 * Delete project by uuid
 */
router.delete('/:uuid/', (req, res, next) => {
	Project.findByIdAndDelete(req.params.uuid)
		.then(project => res.json({ uuid: req.params.uuid }))
		.catch(err => next(err));
});

module.exports = router;
