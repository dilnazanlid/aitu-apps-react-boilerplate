const {Router} = require('express');
const User = require('../models/User');
const router = Router();
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.jwtSecret;


router.post('/register', async(req, res) => {
    try {
        const {userId, phone, dateofbirth, location, gender, orientation} = req.body

        const user = new User({userId, phone, dateofbirth, location, gender, orientation})

        await user.save()

        const token = jwt.sign(
          {userId: user.id},
          jwtSecret,
          {expiresIn: '1h' }
        )

        res.status(201).json({token, userId: user.id, message: 'Данные пользователя сохранены'});

    } catch (e) {
        res.status(500).json({message: 'что-то не то, попробуй снова'})
    }
})

module.exports = router;
