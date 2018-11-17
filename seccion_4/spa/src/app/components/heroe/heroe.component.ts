import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../heroes/heroes.component';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private _heroesServices: HeroesService) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroesServices.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
