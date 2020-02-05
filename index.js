const input_validation1 = document.getElementsByClassName("input-validation")[0];
const input_validation2 = document.getElementsByClassName("input-validation")[1];
const button_transaction = document.getElementsByClassName("button-transaction__main")[0];
const p_inputText = document.getElementsByClassName("p-warning")[0];
const p_inputNumber = document.getElementsByClassName("p-warning")[1];


button_transaction.addEventListener('click',(event) => {
    event.preventDefault();

    if(input_validation1.value.trim() === "" ){
        p_inputText.innerHTML = "This field is required";
    } else {
        p_inputText.innerHTML = "";
    }

    if(input_validation2.value.trim() === ""){
        p_inputNumber.innerHTML = "This field is required";
    } else {
        p_inputNumber.innerHTML = "";
    }
    
});
