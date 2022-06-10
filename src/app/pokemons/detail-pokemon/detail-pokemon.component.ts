import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemonList : Pokemon[] | undefined;
  pokemon : Pokemon | undefined;
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private pokemonservice:PokemonService) { }

  ngOnInit(): void {
    const pokemonId: string | null= this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonservice.getPokemonById(+pokemonId)
      .subscribe((pokemon: Pokemon | undefined) => this.pokemon = pokemon);
    }else{
      this.pokemon = undefined;
    }
  }
  goBack(){
    this.router.navigate(['/pokemons']);
  }

}
