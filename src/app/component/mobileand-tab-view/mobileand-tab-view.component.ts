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
    {'image': 'triumph.png',
      'name': 'Triumph'
    },
    {'image': 'tvs.png',
      'name': 'TVS'
    },
    {'image': 'suzuki.png',
      'name': 'Suzuki'
    },
    {'image': 'royalenfield.png',
      'name': 'Royal Enfield'
    },
    {'image': 'bajaj.png',
      'name': 'Bajaj'
    },
    {'image': 'hero.png',
      'name': 'Hero'
    },
    {'image': 'honda.png',
      'name': 'Honda'
    },
    {'image': 'ktm.png',
      'name': 'KTM'
    },
  ];
  fourWheeler: any= [
    {'image': 'nissan.png',
      'name': 'Nissan'
    },
    {'image': 'volkswegan.png',
      'name': 'Volkswegen'
    },
    {'image': 'honda4w.png',
      'name': 'Honda'
    },
    {'image': 'skoda.png',
      'name': 'Skoda'
    },
    {'image': 'renault.png',
      'name': 'Renault'
    },
    {'image': 'mahindranew.png',
      'name': 'Mahindra'
    },
    {'image': 'mercedes.png',
      'name': 'Mercedes'
    },
    {'image': 'suzuki.png',
      'name': 'Maruti Suzuki'
    },
    {'image': 'Jeep.png',
      'name': 'Jeep'
    },
    {'image': 'bmw.png',
      'name': 'BMW'
    },
    {'image': 'kia.png',
      'name': 'KIA'
    },
    {'image': 'mg.png',
      'name': 'MG'
    },
    {'image': 'tatamotor.png',
      'name': 'Tata'
    },
    {'image': 'baratbenz.png',
      'name': 'Bharat Benz'
    },

  ];
  
  commercial: any = [
    {'image': 'force.png',
      'name': 'Force'
    },
    {'image': 'tatamotor.png',
      'name': 'Tata Motors'
    },
    {'image': 'ashokleyland.png',
      'name': 'Ashok Leyland'
    },
    {'image': 'eicher.png',
      'name': 'Eicher'
    },
    {'image': 'escort1.png',
      'name': 'Escort'
    },
    {'image': 'mahindra.png',
      'name': 'Mahindra'
    },
  ];
  construction: any = [
    {'image': 'jcb.png',
      'name': 'JCB'
    },
    {'image': 'escort1.png',
      'name': 'Escort'
    },
  ]
}
