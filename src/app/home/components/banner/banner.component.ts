import { Component, OnInit } from '@angular/core';
// import Swiper styles
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper) {

  }
  onSlideChange() {

  }

}
