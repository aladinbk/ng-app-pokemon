import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of} from 'rxjs';
@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }
  searchPokemon(term : string): Observable<Pokemon[]>{
    if(term.length <=1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error)=> this.HandleError(error, []))
    ); 
  }
  getListPokemons() : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error)=> this.HandleError(error, undefined))
    );
  }
  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response: any) => this.log(response)),
      catchError((error: Error)=> this.HandleError(error, undefined))
    );
  }
  private log(response: Pokemon[]|Pokemon|undefined){
    console.table(response);
  }
  private HandleError(error: Error, errorValue:any){
    console.error(error);
    return of(errorValue);
  }
  getPokemonTypeList(): string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrick',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
