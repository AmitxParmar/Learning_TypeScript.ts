"use strict";
var userInput;
var useName;
userInput = 54;
userInput = "Amit Parmar";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred! ma1", 500);
