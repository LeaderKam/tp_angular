import { Component, Input, OnInit } from '@angular/core';
import { PokeAPIResInfo } from '../classes/pokemons';
import { PokeShareInfoService } from '../services/poke-share-info.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css'],
  providers: []
})
export class PokeDetailComponent implements OnInit {
// tslint:disable-next-line:no-input-rename
  @Input('detail')
  detail!: PokeAPIResInfo;

constructor(private pokeShareInfo: PokeShareInfoService) {
  this.pokeShareInfo.getObservable().subscribe((data) => console.log(data));
}

  ngOnInit(): void {
  }

}
