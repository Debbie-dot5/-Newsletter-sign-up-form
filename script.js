const inputElem = document.getElementById("email");
const buttonElem = document.querySelector("#submit-btn");
const errorMsg = document.querySelector(".errormsg");
const parentContainer = document.querySelector(".parent");
const successContainer = document.querySelector(".success-cont");
const dismissMsg = document.querySelector(".dismissbtn");


buttonElem.addEventListener("click", () => {
    const inputValue = inputElem.value;
    const containsAtSymbol = inputValue.includes("@");

    if (inputValue.trim() === "") {
        handleError();
    } else if (!containsAtSymbol) {
        handleError("Email must contain '@' symbol");
    } else {
        handleSuccess();
    }

    inputValue = ""
});

function handleError(message = "Please enter a valid email") {
    inputElem.style.backgroundColor = "#fde9e5";
    inputElem.style.color = "#e5beb7";
    errorMsg.textContent = message;
    errorMsg.style.display = "block";
    
}

function handleSuccess() {
    parentContainer.style.display = "none"
    successContainer.style.display = "block"
}

dismissMsg.addEventListener("click", () => {
    location.reload();
   

    
})

