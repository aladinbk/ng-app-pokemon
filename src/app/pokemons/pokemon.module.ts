import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { NgModule } from '@angular/core';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon.service';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

// Les routes du module Pokémon
const pokemonsRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent }
];
  
@NgModule({
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        SearchPokemonComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [PokemonService]
})
export class PokemonModule { }