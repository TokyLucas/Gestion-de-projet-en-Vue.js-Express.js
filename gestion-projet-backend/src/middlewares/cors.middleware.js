// Middleware gérant CORS
const corsMiddleware = async (req, res, next)=> {
    res.set('Access-Control-Allow-Origin', '*');
    next();
}

module.exports.corsMiddleware = corsMiddleware;