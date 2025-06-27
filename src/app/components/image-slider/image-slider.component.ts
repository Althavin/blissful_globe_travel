import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  slides = [
    { image: '/assets/images/Amboseli.jpg', title: 'Discover Paradise' },
    { image: '/assets/images/Mt Kenya.jpg', title: 'Adventure Awaits' },
    { image: '/assets/images/Samburu.jpg', title: 'Cultural Journey' },
    { image: '/assets/images/Nairobi.jpg', title: 'Scenic Escape' }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    nav: true,
    autoHeight: false // Explicitly disable autoHeight
  };
}