import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password || username === "" || email === "" || password === "") {
        next(errorHandler(400, "All fields are required!"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json("Signup successful");
    } catch (error) {
        next(error);
    }

}

export const signin = async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password || email === "" || password === "") {
        next(errorHandler(400, "All fields are required!"));
    }

    try {
        const authUser = await User.findOne({email});
        if(!authUser) {
            return next(errorHandler(404, "Invalid email or password"));
        }

        const validPassword = bcryptjs.compareSync(password, authUser.password);
        if(!validPassword) {
            return next(errorHandler(400, "Invalid email or password"));
        }

        const token = jwt.sign(
            {id: authUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"}
        );

        const {password: pass_word, ...rest} = authUser._doc;

        res.status(200).cookie("access_token", token, {
            httpOnly: true,
        }).json(rest);
    } catch (error) {
        next(error)
    }
}