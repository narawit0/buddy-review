import User from "../models/user.js";
import jwt from "jsonwebtoken";

export default class AuthController {
    signin(req, res) {
        const { username, password } = req.body;
        const user = new User()
        const result = user.findByUsername(username);

        const token = jwt.sign({username: result.username}, process.env.JWT_SIGN_KEY);

        if (result) {
            if (result.password === password) {
                return res.json({
                    "msg": "Login Success fully",
                    "user": {
                        username: result.username
                    },
                    "token": token,
                    "status": 200
                });
            } else {
                return res
                    .status(400)
                    .json({
                        "msg": "your credential is invalid please try again",
                        "status": 400
                    });
            }
        } else {
            return res
                .status(404)
                .json({
                    "msg": "user not found",
                    "status": 404
                });
        }
    }
}