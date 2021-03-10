import { FormGroup } from "@angular/forms";

export function checkPasswords(group: FormGroup) {

        const password = group.get('password').value;
        const confirmPassword = group.get('confirmPassword').value;

        return password === confirmPassword ? null : {samePassword : false};
}