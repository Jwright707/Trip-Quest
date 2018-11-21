const express = require('express');

const QuestController = require('../controllers/quests');


const router = express.Router();

router.post('/', QuestController.createQuest);

router.put('/', QuestController.updateQuest);

router.get('/', QuestController.getQuestList);

router.get('/:id', QuestController.getQuest);

router.delete('/:id');

router.get('/consumeToken', QuestController.consumeToken);

module.exports = router;