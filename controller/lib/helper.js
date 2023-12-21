function errorHandler(error, name, from) {
    let loggerFunction = console.log;


    loggerFunction("-------START-------");
    loggerFunction("Error occured in " + name);

    if (from === "axios") {
        if (error.reponse) {
            loggerFunction(error.reponse.data)
            loggerFunction(error.reponse.status)
            loggerFunction(error.reponse.headers)
        } else if (error.request) {
            loggerFunction(error.request)
        } else {
            loggerFunction("Error ", error.message);
        }
        loggerFunction(error.toJSON());
    } else {
        loggerFunction(error);
    }


    loggerFunction("--------END--------");
}

module.exports = { errorHandler };