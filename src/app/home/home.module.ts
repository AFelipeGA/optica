import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module'
import { SwiperModule } from 'angular2-useful-swiper';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    SwiperModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
