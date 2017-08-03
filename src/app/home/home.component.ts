import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselConfig: Object = {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay: 3000,
      speed: 1000,
      loop: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
