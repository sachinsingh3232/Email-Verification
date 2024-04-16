const User = require('../models/userModel')
const JWT = require('jsonwebtoken')
const Bcrypt = require('bcryptjs')
const nodemailer = require("nodemailer");
const ejs = require('ejs')

exports.signup = async function (req, res) {
    try {

        const email = req.body.email.toLowerCase();
        let user = await User.findOne({ email: email.trim() });
        if (user) {
            if (user.isVerified) {
                return res.status(400).json({ message: "User already exist!" });
            }
            else {
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // Use `true` for port 465, `false` for all other ports
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASS,
                    },
                });
                const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET)
                const template = await ejs.renderFile(__dirname + '/Views/email.ejs', { token });
                const info = await transporter.sendMail({
                    from: '200104049@hbtu.ac.in', // sender address
                    to: email, // list of receivers
                    subject: "Account Verification Link ✔", // Subject line
                    text: "Hello world?", // plain text body
                    html: template, // html body
                });
                return res.status(401).json({ message: 'Your Email has not been verified. Please Verify from email!' });
            }
        }
        else {
            // console.log(req.body)
            req.body.password = Bcrypt.hashSync(req.body.password, 10);
            user = await User.create({
                fName: req.body.fName,
                lName: req.body.lName,
                email: email.trim(),
                password: req.body.password
            })
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASS,
                },
            });
            const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET)
            const template = await ejs.renderFile(__dirname + '/Views/email.ejs', { token });
            const info = await transporter.sendMail({
                from: '200104049@hbtu.ac.in', // sender address
                to: email, // list of receivers
                subject: "Account Verification Link ✔", // Subject line
                text: "Hello world?", // plain text body
                html: template, // html body
            });
            return res.status(200).json({ message: 'Please Verify your Email for login !' });
        }
    } catch (e) {
        console.log(e)
    }
};


exports.confirmEmail = async function (req, res) {
    try {
        const token = req.params.token;
        const decodedToken = JWT.verify(token, process.env.JWT_SECRET);
        await User.findByIdAndUpdate(decodedToken.id, { isVerified: true });
        return res.redirect(`${process.env.CORS_URL}/login`)
    } catch (e) {
        console.log(e);
        return res.redirect(`${process.env.CORS_URL}/invalidToken`)
    }
}


exports.login = async function (req, res) {
    try {
        const email = req.body.email.toLowerCase();
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'The email address ' + req.body.email + ' is not associated with any account. please check and try again!' });
        }
        else if (!Bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({ message: 'Wrong Password!' });
        }
        else if (!user.isVerified) {
            return res.status(401).json({ message: 'Please Verify Your Email or Register Again !' });
        }
        else {
            return res.status(200).json({ user});
        }
    } catch (e) {
        console.log(e)
    }
}
