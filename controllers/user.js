const { User } = require('../models');

const UserController = {
    new: async(req, res) => {
        try {
            const user = req.body;
            const newUser = await User.create(user);
            console.log(`... user ${newUser.firstName} successfully created`);
            return res.status(200).json(newUser);
        } catch(err) {
            console.log(`... there was an error creating the user`);
            return res.status(500).json({error: err});
        }
    },
    one: async(req, res) => {
        try {
            const _id = req.query._id;
            const foundUser = await User.findOne({_id})
            console.log(`... user ${foundUser.firstName} has been found`);
            return res.status(200).json(foundUser);
        } catch(err) {
            console.log(`... error finding user ${err}`);
            return res.status(500).json({error: err});
        }
    },
    edit: async(req, res) => {
        try {
            const _id = req.body._id;
            const updatedUser = await User.findOneAndUpdate({_id}, req.body);
            const doneUpdate = await User.findOne({_id});
            console.log(`... user successfully updated ${doneUpdate.lastName}, ${doneUpdate.firstName}`);
            return res.status(200).json(doneUpdate);
        } catch(err) {
            console.log(`... error updating user ${err}`);
            return res.status(500).json({error: err});
        }
    },
    erase: async(req, res) => {
        try {
            const _id = req.body._id;
            const removedUser = await User.deleteOne({_id});
            console.log(`... user successfully removed ${JSON.stringify(removedUser)}`);
            return res.status(204).json({message: '... user successfully removed'});
        } catch(err) {
            console.log(`... error removing user`);
            return res.status(500).json({error: err});
        }
    }
};

module.exports = UserController;