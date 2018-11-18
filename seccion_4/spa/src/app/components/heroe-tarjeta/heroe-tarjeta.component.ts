import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../heroes/heroes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input()
  heroe: Heroe;

  @Input()
  index: number;

  // @Output()
  // heroeSeleccionado = new EventEmitter<number>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    // console.log('index ' + this.index);
    // this.heroeSeleccionado.emit(this.index);
  }

}
