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
    const filePath =  'https://drive.google.com/file/d/1M8mcFTJcLOkFawLU1AA70WKZ2iE_FOgf/view?usp=sharing'; // Yaha aap apna correct path dekh lein
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
