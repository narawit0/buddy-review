import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split("Bearer ");
        const user = jwt.verify(token[1], process.env.JWT_SIGN_KEY);

        if (user) {
            req.user = user;
            next();
        }
    } catch (e) {
        return res
            .status(401)
            .json({
                "msg": "Invalid Token",
                "status": 401
            })
    }
}

export default auth;