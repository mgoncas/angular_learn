import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    console.log(value);
    const valor = value.toLocaleLowerCase();
    const nombres = valor.split(' ');
    if (todas) {
      // tslint:disable-next-line:forin
      for (const nombre in nombres) {
        nombres[nombre] = nombres[nombre][0].toUpperCase() + nombres[nombre].substring(1);
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
    }
    return nombres.join(' ');
  }
}
