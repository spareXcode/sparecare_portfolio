import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-laptopview',
  imports: [ButtonModule, TabsModule],
  templateUrl: './laptopview.component.html',
  styleUrl: './laptopview.component.css'
})
export class LaptopviewComponent {
  twowheeler: any = [
    {'image': '',
      'name': 'Triumph'
    },
    {'image': '',
      'name': 'TVS'
    },
    {'image': '',
      'name': 'Suzuki'
    },
    {'image': '',
      'name': 'Royal Enfield'
    },
    {'image': '',
      'name': 'Bajaj'
    },
    {'image': '',
      'name': 'Hero'
    },
    {'image': '',
      'name': 'Honda'
    },
    {'image': '',
      'name': 'KTM'
    },
  ];
  fourWheeler: any= [
    {'image': '',
      'name': 'Nissan'
    },
    {'image': '',
      'name': 'Volkswegen'
    },
    {'image': '',
      'name': 'Honda'
    },
    {'image': '',
      'name': 'Skoda'
    },
    {'image': '',
      'name': 'Renault'
    },
    {'image': '',
      'name': 'Mahindra'
    },
    {'image': '',
      'name': 'Mercedese'
    },
    {'image': '',
      'name': 'Maruti Suzuki'
    },
    {'image': '',
      'name': 'Jeep'
    },
    {'image': '',
      'name': 'BMW'
    },
    {'image': '',
      'name': 'KIA'
    },
    {'image': '',
      'name': 'MG'
    },
    {'image': '',
      'name': 'Tata'
    },
    {'image': '',
      'name': 'Bharat Benz'
    },

  ];
  
  commercial: any = [
    {'image': '',
      'name': 'Force'
    },
    {'image': '',
      'name': 'Tata Motors'
    },
    {'image': '',
      'name': 'Ashok Leyland'
    },
    {'image': '',
      'name': 'Eicher'
    },
    {'image': '',
      'name': 'Escort'
    },
    {'image': '',
      'name': 'Mahindra'
    },
  ];
  construction: any = [
    {'image': '',
      'name': 'JCB'
    },
    {'image': '',
      'name': 'Escort'
    },
  ]

}
