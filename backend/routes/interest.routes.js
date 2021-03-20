const {Router} = require('express');
const Interest = require('../models/Interest');
const User = require('../models/User');
const router = Router();
const auth = require('../middleware/auth.middleware')

router.post('/addTopics', auth, async(req, res) => {
    try {
      const {userId, currentSearchStatus, topics} = req.body

      const candidate = await User.find({ userId: req.user.userId })

      if(!candidate){
        return res.status(400).json({message: 'Пользователь не найден'})
      }

      console.log(candidate);

      const interest = new Interest({userId: req.user.userId, currentSearchStatus, topics})

      await interest.save()

      res.status(201).json({message: 'Интересы сохранены'});

    } catch (e) {
        res.status(500).json({message: 'что-то не то, попробуй снова'})
    }
})

module.exports = router;
