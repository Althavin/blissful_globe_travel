import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PackagesComponent {
  packages = [
    {
      name: 'Kenya Packages',
      description: 'Budget 5-Day Safari: Amboseli - Nakuru - Maasai Mara (USD 1,200)',
      details: '5-day adventure with game drives and cultural walks.',
      image: 'assets/images/Amboseli.jpg',
      link: '/packages/kenya-budget-5-day-safari'
    },
    {
      name: 'Tanzania Packages',
      description: 'Budget 5-Day Northern Circuit Safari (USD 1,300–1,500)',
      details: 'Explore Tarangire, Manyara, Serengeti, and Ngorongoro.',
      image: 'assets/images/Lake Victoria.jpg',
      link: '/packages/tanzania-budget-5-day-safari'
    },
    {
      name: 'Uganda Packages',
      description: 'Budget 5-Day Gorilla & Wildlife Trek (USD 1,200–1,500)',
      details: 'Gorilla trekking in Bwindi and safari in Queen Elizabeth.',
      image: 'assets/images/Gorilla.jpg',
      link: '/packages/uganda-budget-5-day-gorilla-trek'
    },
    {
      name: 'Rwanda Packages',
      description: 'Budget 4-Day Gorilla & Culture Trail (USD 1,200–1,400)',
      details: 'Gorilla trekking and Kigali city tour.',
      image: 'assets/images/Samburu.jpg',
      link: '/packages/rwanda-budget-4-day-gorilla-trail'
    }
  ];
}