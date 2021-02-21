import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from './home';

@NgModule({
  imports: [CommonModule, HomeModule],
  declarations: [],
  exports: [HomeModule],
})
export class PagesModule {}
