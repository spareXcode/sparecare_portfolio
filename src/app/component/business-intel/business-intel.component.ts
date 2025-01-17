import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-business-intel',
  imports: [CommonModule,ButtonModule,RouterOutlet],
  templateUrl: './business-intel.component.html',
  styleUrl: './business-intel.component.css'
})
export class BusinessIntelComponent {
  showDropdown: string | null = null;

  toggleDropdown(cardType: string) {
    this.showDropdown = this.showDropdown === cardType ? null : cardType;
  }
  openPDF() {
    const filePath =  'https://scisportfolio150125.s3.us-east-1.amazonaws.com/Docker+and+k8.pdf'
    window.open(filePath, '_blank');
  }

  constructor(private location: Location, private router: Router) {}

  navigateToRoute(): void {
    this.router.navigate(['/mobile']);
  }

  goBack(): void {
    this.location.back();
  }

}
