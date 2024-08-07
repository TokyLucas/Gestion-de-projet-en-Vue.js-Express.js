// Middleware interceptant et gérant toutes les réponses APIs finales
const successResponseMiddleware = async (req, res, next)=> {
    var body = {};
    var status = res.statusCode;
    try{
        body = {
            status: status,
            message: res.message ? res.message : "Success",
            data: res.data
        };
    } catch (error) {
        status = 500;
        body = { 
            status: status,
            message: error.message 
        };
    } finally {
        res.status(status).json(body);
    }
}

module.exports.successResponseMiddleware = successResponseMiddleware;