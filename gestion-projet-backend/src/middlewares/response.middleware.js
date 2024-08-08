// Middleware interceptant et gérant toutes les réponses APIs finales
const successResponseMiddleware = async (req, res, next)=> {
    var body = {};
    var status = res.statusCode;
    body = {
        status: status,
        message: res.message ? res.message : "Success",
        data: res.data
    };
    res.status(status).json(body);
}

module.exports.successResponseMiddleware = successResponseMiddleware;