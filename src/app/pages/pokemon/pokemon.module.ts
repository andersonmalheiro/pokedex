import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonComponent} from './pokemon.component';
import {PokemonListComponent} from './pokemon-list';
import {PokemonDetailsComponent} from './pokemon-details';
import {PokemonRoutingModule} from './pokemon-routing.module';
import {ComponentsModule} from 'src/app/components';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, ComponentsModule, RouterModule],
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
  ],
  exports: [PokemonRoutingModule],
})
export class PokemonModule {}
