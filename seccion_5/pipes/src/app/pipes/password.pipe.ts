import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, cifrar: boolean = true): any {
    let pass: string;
    if (cifrar) {
      let passCifrada = '';
      for (let index = 0; index < value.length; index++) {
        passCifrada = passCifrada + '*';
      }
      pass = passCifrada;
    } else {
      pass = value;
    }
    return pass;
  }
}
