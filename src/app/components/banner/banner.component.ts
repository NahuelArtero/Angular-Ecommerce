import { Component,OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel: any;
  slides = [
    {
      image: 'assets/slide1.JPG',
      title: '',
      description: ''
    },
    {
      image: 'assets/slide2.JPG',
      title: '',
      description: ''
    },
    {
      image: 'assets/slide3.JPG',
      title: '',
      description: ''
    }
  ];

  slideIndex = 0;
  slideInterval: any;

  constructor() { }

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.slides.length;
      this.carousel.nativeElement.style.transform = `translateX(-${this.slideIndex * 100}%)`;
    }, 5000);
  }

  stopSlideShow() {
    clearInterval(this.slideInterval);
  }
}