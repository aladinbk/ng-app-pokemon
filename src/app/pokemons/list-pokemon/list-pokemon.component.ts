import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon|undefined;
  
  constructor(private router: Router,
     private pokemonservice:PokemonService){}

  ngOnInit(): void {
    this.pokemonservice.getListPokemons()
    .subscribe((pokemonList: Pokemon[]) => this.pokemonList = pokemonList);
  }
  SelectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon){
      console.log(`vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
  goToPokemon(pokemon : Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }


}
