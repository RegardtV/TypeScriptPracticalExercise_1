"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helpers = require("./utility");
var registerElement = document.getElementById('register');
document.getElementById('t&c').addEventListener('change', function () {
    registerElement.toggleAttribute('disabled');
});
registerElement.addEventListener('click', function () {
    Helpers.logValidationMessage(Helpers.getInputElementValue('forenames').length >= 1, 'Validated Forenames', 'Invalid Forenames');
    Helpers.logValidationMessage(Helpers.getInputElementValue('surname').length >= 2, 'Validated Surname', 'Invalid Surname');
    var email = Helpers.getInputElementValue('email');
    Helpers.logValidationMessage(email.length >= 4 && email.indexOf('@') != -1, 'Validated email', 'Invalid email');
    var password = Helpers.getInputElementValue('password');
    Helpers.logValidationMessage(password.length >= 4, 'Validated password', 'Invalid password');
    var confirmPassword = Helpers.getInputElementValue('confirmpassword');
    Helpers.logValidationMessage(password === confirmPassword, 'Validated password match', 'passwords don\'t match');
});
document.getElementById('runarray').addEventListener('click', function () {
    var arrNumbers = [89, 5, 56, 102, 7];
    var highNumbers = arrNumbers.filter(function (element, index, array) { return element > 50; });
    console.log("Filter method result: " + highNumbers);
    var arrNames = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    arrNames.splice(2, 2, 'Cindy', 'Zoe');
    console.log("Splice method 1 result: " + arrNames);
    arrNames = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    arrNames.splice(3, 1);
    console.log("Splice method 2 result: " + arrNames);
    arrNumbers.pop();
    console.log("Pop method result: " + arrNumbers);
    arrNumbers = [89, 5, 56, 102, 7];
    arrNumbers.push(78);
    console.log("Push method result: " + arrNumbers);
    arrNumbers = [89, 5, 56, 102, 7];
    console.log("IndexOf  method result: " + arrNumbers.indexOf(5));
    arrNames = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    var arrNamesNew = arrNames.splice(1, 3);
    console.log("Splice method 3 result: " + arrNamesNew);
    arrNumbers = [89, 5, 56, 102, 7];
    arrNumbers.unshift(14, 67);
    console.log("Unshift method result: " + arrNumbers);
    var arrDigits = [1, 2, 3];
    var arrChar = ['a', 'b', 'c'];
    var arrConcat = arrDigits.concat(arrChar);
    console.log("Concat method result: " + arrConcat);
});
//# sourceMappingURL=app.js.map