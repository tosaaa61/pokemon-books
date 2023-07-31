import { POKEMONS } from 'src/models/pokemons';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons = POKEMONS;
  filteredPokemonList: any;
  searchText: any;

  constructor() {}

  ngOnInit(): void {}

  searchResult(seachText: string) {
    this.filteredPokemonList = seachText;
  }
}
