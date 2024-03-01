const express = require('express');
const adminRouter = express.Router();
const User = require('../models/user');
const pdf = require('html-pdf');
const ejs = require('ejs');
const fs = require('fs');

adminRouter.get('/print', async (req, res) => {
    try {
        // Fetch user details from the database
        const users = await User.find({});

        // Render the container content with user details using EJS
        const html = await ejs.renderFile('views/registeredUsers.ejs', { users });

        // Create PDF from HTML content
        pdf.create(html).toBuffer((err, buffer) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.contentType('application/pdf');
                res.send(buffer);
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = adminRouter;
