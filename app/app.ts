import * as Helpers from './utility';

const registerElement: HTMLElement = document.getElementById('register')!;

document.getElementById('t&c')!.addEventListener('change', ()=>{
    registerElement.toggleAttribute('disabled');
});


registerElement.addEventListener('click', ()=>{
    // validate forenames input
    Helpers.logValidationMessage(Helpers.getInputElementValue('forenames').length >= 1, 'Validated Forenames', 'Invalid Forenames');
    // validate surname input
    Helpers.logValidationMessage(Helpers.getInputElementValue('surname').length >= 2, 'Validated Surname', 'Invalid Surname');
    // valdiate email input
    const email: string = Helpers.getInputElementValue('email');
    Helpers.logValidationMessage(email.length >= 4 && email.indexOf('@') != -1, 'Validated email', 'Invalid email');
    //validate password input
    const password: string = Helpers.getInputElementValue('password');
    Helpers.logValidationMessage(password.length >= 4, 'Validated password', 'Invalid password');
    //validate confirm password
    const confirmPassword: string = Helpers.getInputElementValue('confirmpassword');
    Helpers.logValidationMessage(password===confirmPassword, 'Validated password match', 'passwords don\'t match');
})

document.getElementById('runarray')!.addEventListener('click', ()=>{

    // filter method
    let arrNumbers: number [] = [89, 5, 56, 102, 7];
    const highNumbers: number [] = arrNumbers.filter((element, index, array)=> element > 50);
    console.log(`Filter method result: ${highNumbers}`);
    // splice method
    let arrNames: string [] = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    arrNames.splice(2,2,'Cindy','Zoe');
    console.log(`Splice method 1 result: ${arrNames}`);
    // splice method again
    arrNames = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    arrNames.splice(3, 1);
    console.log(`Splice method 2 result: ${arrNames}`);
    // pop method
    arrNumbers.pop();
    console.log(`Pop method result: ${arrNumbers}`);
    /// push method
    arrNumbers = [89, 5, 56, 102, 7];
    arrNumbers.push(78);
    console.log(`Push method result: ${arrNumbers}`);
    // indexOf method
    arrNumbers = [89, 5, 56, 102, 7];
    console.log(`IndexOf  method result: ${arrNumbers.indexOf(5)}`);
    // splice method once more
    arrNames = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
    const arrNamesNew: string [] = arrNames.splice(1,3);
    console.log(`Splice method 3 result: ${arrNamesNew}`);
    // unshift method
    arrNumbers = [89, 5, 56, 102, 7];
    arrNumbers.unshift(14,67);
    console.log(`Unshift method result: ${arrNumbers}`);
    //concat method
    const arrDigits: any []= [1,2,3];
    const arrChar: any [] = ['a', 'b', 'c'];
    const arrConcat: any [] = arrDigits.concat(arrChar);
    console.log(`Concat method result: ${arrConcat}`);  

})