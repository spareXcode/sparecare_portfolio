import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-laptopview',
  imports: [ButtonModule, TabsModule,CommonModule, RouterOutlet],
  templateUrl: './laptopview.component.html',
  styleUrl: './laptopview.component.css'
})
export class LaptopviewComponent {
  twowheeler: any = [
    {'image': 'honda.avif',
      'name': 'Honda 2W'
    },
    {'image': 'tvs.avif',
      'name': 'TVS'
    },
    {'image': 'hero.avif',
      'name': 'Hero'
    },
    {'image': 'bajaj.avif',
      'name': 'Bajaj'
    },
    {'image': 'royalenfield.avif',
      'name': 'Royal Enfield'
    },
    {'image': 'suzuki.avif',
      'name': 'Suzuki 2W'
    },
    {'image': 'ktm.avif',
      'name': 'KTM'
    },
    {'image': 'triumph.avif',
      'name': 'Triumph Motorcycles'
    },
  ];
  fourWheeler: any= [
    
    {'image': 'mahindranew.avif',
      'name': 'Mahindra'
    },
    {'image': 'tatamotor.avif',
      'name': 'TATA PCBU'
    },
    {'image': 'kia.avif',
      'name': 'KIA'
    },
    {'image': 'suzuki.avif',
      'name': 'Maruti Suzuki'
    },
    {'image': 'mg.avif',
      'name': 'Morris Garages'
    },
    {'image': 'skoda.avif',
      'name': 'Skoda'
    },
    {'image': 'volkswegan.avif',
      'name': 'Volkswagen'
    },
    {'image': 'Jeep.avif',
      'name': 'JEEP'
    },
    {'image': 'renault.avif',
      'name': 'Renault'
    },
    {'image': 'honda4w.avif',
      'name': 'Honda 4W'
    }

  ];
  
  commercial: any = [
    
    {'image': 'tatamotor.avif',
      'name': 'TATA CVBU'
    },
    {'image': 'baratbenz.avif',
      'name': 'Bharat Benz,'
    },
    {'image': 'ashokleyland.avif',
      'name': 'Ashok Leyland'
    },
    {'image': 'eicher.avif',
      'name': 'Volvo Eicher'
    },
    {'image': 'escort1.avif',
      'name': 'Escort'
    }
  ];
  construction: any = [
    {'image': 'jcb.avif',
      'name': 'JCB'
    },
    {'image': 'escort1.avif',
      'name': 'Escort'
    },
    {'image': 'mahindra.avif',
      'name': 'Mahindra Tractor'
    },
  ]
  constructor(private router:Router){

  }

  valueOffering(brandName:any){
    console.log(brandName)
  this.router.navigate(['/lb'],{
    queryParams:{brand:brandName}
  })
  }
}
