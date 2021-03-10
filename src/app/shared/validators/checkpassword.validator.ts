import { FormGroup } from "@angular/forms";

export function checkPasswords(group: FormGroup): boolean {
        group.get('').valueChanges

        const password = group.get('password').value;
        const confirmPassword = group.get('confirmPassword').value;

        console.log('Coucou')

        return password === confirmPassword ? null : false;
}