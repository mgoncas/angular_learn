import { Component, OnInit } from '@angular/core';
import { promised, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre = 'Miguel';
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  percent = 0.3;
  salario = 1234.5;
  heroe = {
    nombre: 'wolverine',
    clave: 'lobez',
    edad: 50,
    direccion: {
      calle: 'lope de vega',
      casa: 19
    }
  };

  valorDePromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 3500);
  });

  fecha = new Date();

  nombre2 = 'miguEl goNzález cAstro';

  video = 'EjZbSr0GkIQ';

  pass = 'contraseña';

  ocultaPass: boolean;

  ngOnInit(): void {
    this.ocultaPass = false;
  }

  public ocultaPassword() {
    this.ocultaPass = !this.ocultaPass;
  }
}
