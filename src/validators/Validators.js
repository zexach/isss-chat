export const NameValidator = (name) => {
    const nameRegex = /\b\w{2,}\b(?:.*?\b\w{2,}\b)+/;
    return nameRegex.test(name);
}

export const EmailValidator = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const PasswordValidator = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/;
    return passwordRegex.test(password);
}