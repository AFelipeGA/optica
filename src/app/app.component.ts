import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  brandsConfig: Object = {
    slidesPerView: 5,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 50,
    autoplay: 3000,
    speed: 1000,
    loop: true,
  }

  constructor() {
  }

  ngOnInit() {
  }

}
