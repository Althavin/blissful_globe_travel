import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesSectionComponent {
  services = [
    { name: 'Safaris & Game Drives', description: 'Discover Africa’s iconic wildlife and landscapes with tailored game drives featuring the Big Five and more.', image: 'assets/images/safaris.png' },
    { name: 'Beach Holidays & Coastal Excursions', description: 'Relax on sun-drenched shores with all-inclusive beach getaways, snorkeling, and romantic retreats.', image: 'assets/images/coastal..png' },
    { name: 'Cultural Tours & Experiences', description: 'Immerse in Kenya’s vibrant heritage with Maasai dances, Samburu beadwork, and Swahili storytelling.', image: 'assets/images/cultural.png' },
    { name: 'Accommodation Booking', description: 'Handpicked stays from budget to 5-star hotels, eco-lodges, and luxury camps across East Africa.', image: 'assets/images/bedding.png' },
    { name: 'Airport Transfers', description: 'Stress-free pickups and drop-offs with VIP meet-and-greet services at Nairobi, Mombasa, and more.', image: 'assets/images/airport.png' },
    { name: 'Flight Booking & Travel Logistics', description: 'Smooth flight bookings, safari charters, and travel planning with visa assistance on request.', image: 'assets/images/maps.png' },
    { name: 'Customized Travel Planning', description: 'Tailor-made itineraries for honeymoons, solo adventures, or multi-country routes with personalized consultations.', image: 'assets/images/safaris.png' } // Reusing safaris as placeholder
  ];
}