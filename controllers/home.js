const userModel = require("../models/user");

async function homePage(req, res){
    res.render('index');
}

async function submit(req, res) {
    try {
        const userDetails = req.body;
        const newUser = await userModel.create(userDetails);
        // Passing userDetails object directly to render function
        // res.render("showDetails", {userDetails})
        res.redirect('/showDetails');
    } catch (error) {
        console.log("error occurred submitting user details:", error);
        res.status(500).send("An error occurred while submitting user details. Please try again later.");
    }
}
async function showDetails(req,res){
    try {
        // Fetch user details from the database
        const userDetails = await userModel.find({});
        // Render the showDetails page and pass the user details to the template
        res.render('showDetails', { userDetails });
    } catch (error) {
        console.log("Error fetching user details:", error);
        res.status(500).send("An error occurred while fetching user details.");
    }
}

async function registeredUsers(req, res){
    try {
        // Fetching all registered users from the database
        const users = await userModel.find({});
        // Render the admin page and pass the list of users
        res.render('registeredUsers', { users });
        
    } catch (error) {
        console.log("Error fetching registered users:", error);
        res.status(500).send("An error occurred while fetching registered users.");
    }
}
module.exports = {homePage, submit, registeredUsers, showDetails}