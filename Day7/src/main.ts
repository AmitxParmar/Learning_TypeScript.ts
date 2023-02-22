let userInput: unknown;
let useName: string;
userInput = 54;
userInput = "Amit Parmar";

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred! ma1", 500);