import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobileand-tab-view',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './mobileand-tab-view.component.html',
  styleUrl: './mobileand-tab-view.component.css'
})
export class MobileandTabViewComponent {

  showDropdown: string | null = null;

  toggleDropdown(cardType: string) {
    this.showDropdown = this.showDropdown === cardType ? null : cardType;
    this.scrollToTop()
    
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }

  twowheeler: any = [
    {'image': 'triumph.avif',
      'name': 'Triumph'
    },
    {'image': 'tvs.avif',
      'name': 'TVS'
    },
    {'image': 'suzuki.avif',
      'name': 'Suzuki'
    },
    {'image': 'royalenfield.avif',
      'name': 'Royal Enfield'
    },
    {'image': 'bajaj.avif',
      'name': 'Bajaj'
    },
    {'image': 'hero.avif',
      'name': 'Hero'
    },
    {'image': 'honda.avif',
      'name': 'Honda'
    },
    {'image': 'ktm.avif',
      'name': 'KTM'
    },
  ];
  fourWheeler: any= [
    {'image': 'nissan.avif',
      'name': 'Nissan'
    },
    {'image': 'volkswegan.avif',
      'name': 'Volkswagen'
    },
    {'image': 'honda4w.avif',
      'name': 'Honda'
    },
    {'image': 'skoda.avif',
      'name': 'Skoda'
    },
    {'image': 'renault.avif',
      'name': 'Renault'
    },
    {'image': 'mahindranew.avif',
      'name': 'Mahindra'
    },
    {'image': 'mercedes.avif',
      'name': 'Mercedes'
    },
    {'image': 'suzuki.avif',
      'name': 'Maruti Suzuki'
    },
    {'image': 'Jeep.avif',
      'name': 'Jeep'
    },
    {'image': 'bmw.avif',
      'name': 'BMW'
    },
    {'image': 'kia.avif',
      'name': 'KIA'
    },
    {'image': 'mg.avif',
      'name': 'Morris Garages'
    },
    {'image': 'tatamotor.avif',
      'name': 'Tata'
    },
    {'image': 'baratbenz.avif',
      'name': 'Bharat Benz'
    },

  ];
  
  commercial: any = [
    {'image': 'force.avif',
      'name': 'Force'
    },
    {'image': 'tatamotor.avif',
      'name': 'Tata Motors'
    },
    {'image': 'ashokleyland.avif',
      'name': 'Ashok Leyland'
    },
    {'image': 'eicher.avif',
      'name': 'Eicher'
    },
    {'image': 'escort1.avif',
      'name': 'Escort'
    },
    {'image': 'mahindra.avif',
      'name': 'Mahindra'
    },
  ];
  construction: any = [
    {'image': 'jcb.avif',
      'name': 'JCB'
    },
    {'image': 'escort1.avif',
      'name': 'Escort'
    },
  ]
}
