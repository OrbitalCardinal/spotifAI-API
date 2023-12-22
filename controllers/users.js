const Users = require('../models/users');

// Get users
exports.getUsers = (req, res, next) => {
    Users.findAll().then(users => {
        res.status(200).json(users);
    }).catch(error => {
        res.status(500).json({
            message: "Can't retrieve users",
            error: error
        });
    });
}

// New user
exports.postUser = (req, res, next) => {
    const id_user = req.body.id_user;
    const access_token = req.body.access_token;
    const token_type = req.body.token_type;
    const expires_in = req.body.expires_in;
    const refresh_token = req.body.refresh_token;
    const scope = req.body.scope;

    const body = {
        id_user: req.body.id_user,
        access_token: req.body.access_token,
        token_type: req.body.token_type,
        expires_in: req.body.expires_in,
        refresh_token: req.body.refresh_token,
        scope: req.body.scope
    }

    Users.create(body).then(result => {
        res.status(200).json({
            'message': 'User posted successfully',
            data: result
        });
    }).catch(error => {
        if(error.message === 'Validation error') {
            res.status(200).json(body);
            // Refactorizar, buscar usuario y patchearlo
        } else {
            res.status(500).json({
                message: "Couldn't post user",
                error: error
            });    
        }
        
    })
}