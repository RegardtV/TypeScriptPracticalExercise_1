"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logValidationMessage = exports.getInputElementValue = void 0;
function getInputElementValue(elementID) {
    var inputElement = document.getElementById(elementID);
    return inputElement.value;
}
exports.getInputElementValue = getInputElementValue;
function logValidationMessage(isValid, messageConfirm, messageError) {
    if (isValid)
        console.log(messageConfirm);
    else
        console.error(messageError);
}
exports.logValidationMessage = logValidationMessage;
//# sourceMappingURL=utility.js.map