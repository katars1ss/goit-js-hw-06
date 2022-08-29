const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { login, password }
    } = event.currentTarget;

    if (this.email.value === "" || this.password.value === "") {
    alert("Please fill in all the fields!");
    } else {
        const formElements = event.currentTarget.elements;
        const mail = formElements.email.value;
        const password = formElements.password.value;

        const formData = {
            mail,
            password,
        };

        console.log(formData);

        form.reset();
    }
}