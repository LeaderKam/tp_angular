import { Component, OnInit } from '@angular/core';
import { PokeAPIResInfo, Pokemons } from '../classes/pokemons';
import { PokeApiService } from '../services/poke-api.service';
import { PokeShareInfoService } from '../services/poke-share-info.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokeApiService]
})
export class HomeComponent implements OnInit {
  name = 'Nom a chercher';
  id!: string;
  selectedValue = '';
  searchPokeName = '';

  pokemons: Pokemons[] = [];
  pokeDetail!: PokeAPIResInfo;
  constructor(private primengConfig: PrimeNGConfig, private pokeService: PokeApiService, private pokeShareInfo: PokeShareInfoService) {
    this.pokemons.push(new Pokemons('1', 'limber'));
    this.pokemons.push(new Pokemons('2', 'imposter'));
    this.pokemons.push(new Pokemons('3', 'ditto'));
    this.pokemons.push(new Pokemons('4', 'metal-powder'));
    this.pokemons.push(new Pokemons('5', 'quick-powder'));
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((item: { name: string; }, index: number) => {
        this.pokemons.push(new Pokemons(index.toString(), item.name));
      });
    });
  }

  go() {
    if (this.selectedValue !== ''){
      this.pokeService.getPokemonInfo(this.selectedValue).subscribe((data) => {
        this.pokeDetail = data;
        this.pokeShareInfo.setValue(this.selectedValue);
      });
    }
  }
}
