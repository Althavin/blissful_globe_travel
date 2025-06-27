import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuOpen = false;
  isDestinationsDropdownOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    // Close dropdown when mobile menu toggles
    if (!this.menuOpen) {
      this.isDestinationsDropdownOpen = false;
    }
  }

  closeMobileMenu() {
    this.menuOpen = false;
    this.isDestinationsDropdownOpen = false;
  }

  toggleDestinationsDropdown(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();
    this.isDestinationsDropdownOpen = !this.isDestinationsDropdownOpen;
  }

  selectDestination() {
    // Always close the dropdown when a destination is selected
    this.isDestinationsDropdownOpen = false;
    // Also close mobile menu if it's open
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const dropdownElement = document.querySelector('.dropdown');
    
    if (dropdownElement && !dropdownElement.contains(target)) {
      this.isDestinationsDropdownOpen = false;
    }
  }

  // Close mobile menu on escape key
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (this.menuOpen) {
      this.closeMobileMenu();
    }
  }
}