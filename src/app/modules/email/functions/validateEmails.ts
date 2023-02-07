import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export const validateEmails = (emails: string) => {
    return (emails.split(',')
        .map(email => Validators.email(<AbstractControl>{ value: email }))
        .find(_ => _ !== null) === undefined);
}

export const emailsValidator = (control: AbstractControl): ValidationErrors | null => {
    if (control.value === '' || !control.value || validateEmails(control.value)) {
        return null
    }
    return { emails: true };
}