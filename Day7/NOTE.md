Throwing errors


function generateError(message: string, code: number) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred! ma1', 500);