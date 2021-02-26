import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeApiRes, PokeAPIResInfo } from '../classes/pokemons';

const url = 'https://pokeapi.co/api/v2/pokemon/';
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {



  constructor(private httpClient: HttpClient) { }


  getPokemons(): Observable <PokeApiRes>{
    return this.httpClient.get<PokeApiRes>(url);
  }

  getPokemonInfo(id: string): Observable <PokeAPIResInfo>{
    return this.httpClient.get<PokeAPIResInfo>(url + id + '/');
  }
}
