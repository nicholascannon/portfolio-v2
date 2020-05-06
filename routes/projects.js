/**
 * Project API routes
 */
const router = require('express').Router();
const Joi = require('@hapi/joi');

const Project = require('../models/Project');

const projectSchema = Joi.object({
	name: Joi.string().required(),
	body: Joi.string().required(),
	tech: Joi.array()
		.allow(Joi.string())
		.min(1),
	githubUrl: Joi.string(),
	liveUrl: Joi.string()
});

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
	const { err } = projectSchema.validate(req.body);
	if (err) {
		return res.status(400).json({ msg: 'Please provide valid information about the project' });
	}

	Project.create({ ...req.body })
		.then(project => res.json(project))
		.catch(err => next(err));
});

/**
 * Edit an existing project
 */
router.put('/:uuid/', (req, res, next) => {
	const { err } = projectSchema.validate(req.body);
	if (err) {
		return res.status(400).json({ msg: 'Please provide valid information about the project' });
	}

	Project.findByIdAndUpdate(req.params.uuid, { ...req.body }, { new: true })
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
