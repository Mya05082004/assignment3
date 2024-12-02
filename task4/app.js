document.addEventListener('DOMContentLoaded', () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Step 2: Move focus to the "Arrival date" text box
    document.getElementById("arrival-date").focus();

    // Step 3: Code an event handler for the submit event of the form
    document.querySelector("form").addEventListener("submit", (event) => {
        let isValid = true;

        // Validate all text boxes have a value
        const arrivalDate = document.getElementById("arrival-date").value.trim();
        const nights = document.getElementById("nights").value.trim();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (arrivalDate === "") {
            isValid = false;
            document.getElementById("arrival-date").nextElementSibling.textContent = "This field is required.";
        } else {
            document.getElementById("arrival-date").nextElementSibling.textContent = "";
        }

        if (nights === "" || isNaN(nights)) {
            isValid = false;
            document.getElementById("nights").nextElementSibling.textContent = "Must be numeric.";
        } else {
            document.getElementById("nights").nextElementSibling.textContent = "";
        }

        if (name === "") {
            isValid = false;
            document.getElementById("name").nextElementSibling.textContent = "This field is required.";
        } else {
            document.getElementById("name").nextElementSibling.textContent = "";
        }

        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            document.getElementById("email").nextElementSibling.textContent = "Must be a valid email address.";
        } else {
            document.getElementById("email").nextElementSibling.textContent = "";
        }

        if (phone === "") {
            isValid = false;
            document.getElementById("phone").nextElementSibling.textContent = "This field is required.";
        } else {
            document.getElementById("phone").nextElementSibling.textContent = "";
        }

        // Prevent form submission if any entries are invalid
        if (!isValid) {
            event.preventDefault();
        }

        // Trim entries and put them back into the controls
        document.getElementById("arrival-date").value = arrivalDate;
        document.getElementById("nights").value = nights;
        document.getElementById("name").value = name;
        document.getElementById("email").value = email;
        document.getElementById("phone").value = phone;

        // Move focus back to the "Arrival date" text box
        document.getElementById("arrival-date").focus();
    });
});
