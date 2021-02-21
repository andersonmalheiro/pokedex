import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from './home';
import { PokemonModule } from './pokemon';

@NgModule({
  imports: [CommonModule, HomeModule],
  declarations: [],
  exports: [HomeModule, PokemonModule],
})
export class PagesModule {}
