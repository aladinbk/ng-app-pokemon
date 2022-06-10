import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  
  constructor(private pokemonservice:PokemonService,
    private router:Router) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=> this.pokemonservice.searchPokemon(term))
    );
  }
  search(term : string){
    this.searchTerms.next(term);
  }
  goToDetail(pokemon : Pokemon){
     const link= ['/pokemon', pokemon.id];
     this.router.navigate(link);
  }

}
