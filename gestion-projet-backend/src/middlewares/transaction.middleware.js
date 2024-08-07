// Middleware interceptant et gérant toutes les transaction des APIs
const handleTransaction = async (req, res, next)=> {
    var status = res.statusCode;
    var transaction = res.transaction
    try{
        if (transaction) await transaction.commit();
    } catch (error) {
        if (transaction) await transaction.rollback();
    } finally {
        next();
    }
}

module.exports.handleTransaction = handleTransaction;