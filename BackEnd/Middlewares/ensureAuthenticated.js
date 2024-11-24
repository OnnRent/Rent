// Middlewares/ensureAuthenticated.js
import jwt from 'jsonwebtoken';

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization']; // Access headers correctly
    if (!auth) {
        return res.status(403).json({ message: "Unauthorized, JWT token is required" });
    }
    try {
        const token = auth.split(' ')[1]; // Extract the token from the Authorization header
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded;  // Attach decoded user info to the request
        next();  // Allow the next middleware or route handler to execute
    } catch (err) {
        return res.status(403).json({ message: "Unauthorized, JWT token is invalid or expired" });
    }
}

export default ensureAuthenticated;
