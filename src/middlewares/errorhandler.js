const {constants} = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title: "Fields Validation", message: err.message, stackTrace: err.stack})
            break
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack})
            break
        case constants.INTERNAL_ERROR:
            res.json({title: "Internal Error", message: err.message, stackTrace: err.stack})
            break
        default:
            res.json({title: "For Sure!!??", message: "This an Amazing Error budy! :-)", stackTrace: err.stack})
            break
    }
}

module.exports = errorHandler