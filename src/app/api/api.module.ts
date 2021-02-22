import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {GenerationService} from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [GenerationService],
})
export class ApiModule {}
