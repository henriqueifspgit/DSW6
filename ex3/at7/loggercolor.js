import util from "util";

const error = util.debuglog("ERROR");
const warning = util.debuglog("WARNING");
const info = util.debuglog("INFO");

// Códigos ANSI para cores no terminal
const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m"
};

// Funções para exibir mensagens coloridas
function logError(message) {
    error(`${colors.red}[ERROR] ${message}${colors.reset}`);
}

function logWarning(message) {
    warning(`${colors.yellow}[WARNING] ${message}${colors.reset}`);
}

function logInfo(message) {
    info(`${colors.green}[INFO] ${message}${colors.reset}`);
}

export { logError as error, logWarning as warning, logInfo as info };