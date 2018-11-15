const express = require('express');
const querymen = require('querymen');
const router = express.Router();
const useController =  require('../controllers/user.controller');

const schema = new querymen.Schema({
    rating:{
        type: [Number],
    }
});

const errorHandlingSchema = new querymen.Schema({
    rating:{
        type: Number,
        enum: [4, 5],
    }
});


router.post('/create', useController.create_user);
router.get('/', querymen.middleware(), useController.users);
router.get('/custom-schema', querymen.middleware({
    rating:{
        type: Number,
        paths:['rating'],
        operator: '$gte'
    }
}), useController.custom_schema_users);

router.get('/reuseable-schema', querymen.middleware(schema), useController.reuseable_schema);
router.get('/error-handler-schema', querymen.middleware(errorHandlingSchema), useController.reuseable_schema);

router.use(querymen.errorHandler());

module.exports = router;