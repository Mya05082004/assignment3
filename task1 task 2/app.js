const $ = (selector) => document.querySelector(selector);

function clearSubtotal() {
    $("#subtotal").value = '';
}

function clearTaxRate() {
    $("#taxRate").value = '';
}

function processEntries() {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        $("#subtotal").focus();
        return;
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        $("#taxRate").focus();
        return;
    }

    const salesTax = (subtotal * taxRate) / 100; 
    const total = subtotal + salesTax;

    $("#salesTax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);
}

function clearFields() {
    clearSubtotal();
    clearTaxRate();
    $("#salesTax").value = '';
    $("#total").value = '';
    $("#subtotal").focus();
}

document.addEventListener('DOMContentLoaded', () => {
    $("#buttonCal").addEventListener('click', () => {
        processEntries();
        $("#subtotal").focus();
    });

    $("#subtotal").addEventListener('click', clearSubtotal);
    $("#taxRate").addEventListener('click', clearTaxRate);
    $("#buttonClear").addEventListener('click', clearFields);

    $("#subtotal").focus();
});


// task 2
function processEntry() {
    const change = parseInt($("#change").value);

    if (isNaN(change) || change < 0 || change > 99) {
        alert("Please enter a number between 0 and 99.");
        $("#change").focus();
        return;
    }

    makeChange(change);
}

function makeChange(change) {
    const quarters = Math.floor(change / 25);
    let remainder = change % 25;

    const dimes = Math.floor(remainder / 10);
    remainder = remainder % 10;

    const nickels = Math.floor(remainder / 5);
    const pennies = remainder % 5;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
}

document.addEventListener('DOMContentLoaded', () => {
    $("#buttonCalculate").addEventListener('click', processEntry);
});
