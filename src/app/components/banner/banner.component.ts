import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  onEnquiry() {
    // You can replace this with actual navigation or modal opening logic
    console.log('Enquiry button clicked!');
    // Example: this.router.navigate(['/contact']);
  }
}