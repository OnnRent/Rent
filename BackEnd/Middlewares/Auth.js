const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization']; // Fix: access headers correctly
    if (!auth) {
        return res.status(403)
            .json({ message: "Unauthorized, JWT token is required" });
    }
    try {
        const token = auth.split(' ')[1]; // If the token is prefixed with "Bearer ", we split it
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user data to req
        next(); // Proceed to next middleware/handler
    } catch (err) {
        return res.status(403)
            .json({ message: "Unauthorized, JWT token is invalid or expired" });
    }
}

module.exports = ensureAuthenticated;
