import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit, OnDestroy {
  sectionTitle = 'Traveler Experiences';
  sectionDescription = 'Hear what our clients say about their adventures with us';
  overallRating = 4.7;
  reviewCount = 6;
  
  currentIndex = 0;
  autoScrollInterval: any;
  visibleReviews: any[] = [];
  totalSlides = 0;
  
  reviews = [

    {
      name: 'Jane Doe',
      location: 'Nairobi, Kenya',
      rating: 5,
      comment: 'An incredible safari experience in Maasai Mara! The guides were knowledgeable, and the accommodations were top-notch.',
      image: 'assets/images/review1.jpg'
    },
    {
      name: 'John Smith',
      location: 'London, UK',
      rating: 4,
      comment: 'The beach getaway to Zanzibar was perfect for our honeymoon. Highly recommend the snorkeling trips!',
      image: 'assets/images/review2.jpg'
    },
    {
      name: 'Aisha Patel',
      location: 'Mumbai, India',
      rating: 5,
      comment: 'The cultural tour was a highlight—learning from the Maasai community was unforgettable.',
      image: 'assets/images/review3.jpg'
    },
    {
      name: 'Carlos Ruiz',
      location: 'Madrid, Spain',
      rating: 4,
      comment: 'Seamless airport transfers and a well-planned itinerary for our Uganda trip. Great service!',
      image: 'assets/images/review4.jpg'
    },
    {
      name: 'Li Wei',
      location: 'Beijing, China',
      rating: 5,
      comment: 'Customized travel planning made our multi-country tour flawless. Can’t wait to return!',
      image: 'assets/images/review5.jpg'
    },
    {
      name: 'Fatima Ahmed',
      location: 'Cairo, Egypt',
      rating: 4,
      comment: 'The flight booking process was smooth, and the safari charter was a thrilling addition.',
      image: 'assets/images/review6.jpg'
    }  ];

  ngOnInit() {
    this.calculateTotalSlides();
    this.updateVisibleReviews();
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  calculateTotalSlides() {
    const itemsPerView = this.getItemsPerView();
    this.totalSlides = Math.ceil(this.reviews.length / itemsPerView);
  }

  getItemsPerView(): number {
    if (window.innerWidth < 768) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    return 3; // Reduced from 4 to 3 for better fit
  }

  updateVisibleReviews() {
    const itemsPerView = this.getItemsPerView();
    this.visibleReviews = [];
    
    for (let i = 0; i < itemsPerView; i++) {
      const index = (this.currentIndex + i) % this.reviews.length;
      this.visibleReviews.push(this.reviews[index]);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateVisibleReviews();
    this.resetAutoScroll();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateVisibleReviews();
    this.resetAutoScroll();
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.updateVisibleReviews();
    this.resetAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  resetAutoScroll() {
    this.stopAutoScroll();
    this.startAutoScroll();
  }

  onResize() {
    this.calculateTotalSlides();
    this.updateVisibleReviews();
  }
}

