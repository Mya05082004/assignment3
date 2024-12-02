const $ = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', () => {
    $("#calculate").addEventListener('click', processEntry);
    $("#income").focus();
});
function processEntry() {
    const income = parseFloat($("#income").value);

    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid number greater than zero.");
        $("#income").focus();
        return;
    }

    const taxAmount = calculateTax(income);
    $("#tax").value = taxAmount.toFixed(2);
    $("#income").focus();
}

function calculateTax(income) {
    let tax = 0;

    if (income <= 9875) {
        tax = income * 0.10;
    } else if (income <= 40125) {
        tax = 987.50 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
        tax = 4617.50 + (income - 40125) * 0.22;
    } else if (income <= 163300) {
        tax = 14605.50 + (income - 85525) * 0.24;
    } // Add more brackets as needed

    return tax;
}
