import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ComponentsModule, RouterModule],
  declarations: [HomeComponent],
  exports: [HomeRoutingModule],
})
export class HomeModule {}
