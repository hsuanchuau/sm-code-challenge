import express from 'express';
import mockDatabaseInstance from '../repositories/mockDatabase.js';

var router = express.Router();

router.get('/', (req, res) => {
  try {
    const issues = mockDatabaseInstance.getAll();
    res.json(issues);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get('/:id', (req, res) => {
  try {
    const issue = mockDatabaseInstance.getOne(parseInt(req.params.id));
    res.json(issue);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.post('/', (req, res) => {
  try {
    const newIssue = {
      title: req.body.title,
      description: req.body.description,
    };
    mockDatabaseInstance.addIssue(newIssue);
    res.status(201).json(newIssue);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.put('/:id', (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
    };
    const updatedIssue = mockDatabaseInstance.updateIssue(
      parseInt(req.params.id),
      data
    );
    res.json(updatedIssue);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.delete('/:id', (req, res) => {
  try {
    mockDatabaseInstance.deleteIssue(parseInt(req.params.id));
    res.status(204).send();
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

export default router;
