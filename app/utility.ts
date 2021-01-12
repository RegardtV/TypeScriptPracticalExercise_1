// function to return value of input Element
function getInputElementValue(elementID: string): string {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  return inputElement.value;
}

// function to log valdiation message based on provided boolean
function logValidationMessage(isValid: boolean, messageConfirm: string, messageError: string): void{
    if (isValid)
        console.log(messageConfirm);
    else
       console.error(messageError);
}

export { getInputElementValue, logValidationMessage };
