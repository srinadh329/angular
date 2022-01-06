import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [HomeComponent, TestComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
  
})
export class HomeModule { }
