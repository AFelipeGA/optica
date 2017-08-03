import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module'

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SwiperModule } from 'angular2-useful-swiper';

import { ng2Parallax } from 'ang2-parallax/ng2parallax';


@NgModule({
  declarations: [
    AppComponent,
    ng2Parallax
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
