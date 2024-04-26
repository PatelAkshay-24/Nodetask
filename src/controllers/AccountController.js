const mongoose = require('mongoose');
const Account = require('../models/Account');
const User = require('../models/User');

exports.createAccount = async (req, res) => {
    try {
        const { userId } = req.params;
        const { accountName } = req.body;
        
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }
        
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const newAccount = await Account.create({ accountName, userId });
        console.log(newAccount)
        user.accounts.push(newAccount);
        await user.save();
        
        res.status(201).json(newAccount);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getUserAccounts = async (req, res) => {
    try {
        const { userId } = req.params;

        const accounts = await User.findById(userId).populate('accounts');

        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};