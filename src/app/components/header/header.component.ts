import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
toggleMenu() {
throw new Error('Method not implemented.');
}
menuActive: any;

}

// ng module

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }