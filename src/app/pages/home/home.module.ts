import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [HomeComponent],
  exports: [HomeRoutingModule],
})
export class HomeModule {}
