import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brandwisedealer',
  imports: [],
  templateUrl: './brandwisedealer.component.html',
  styleUrl: './brandwisedealer.component.css',
})
export class BrandwisedealerComponent {
  brandName: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.brandName = params['brand'];
      console.log('brandName ', this.brandName);
    });
  }

  valueOffering(brandName: any) {
    console.log(brandName);
    this.router.navigate(['/lb'], {
      queryParams: { brand: brandName },
    });
  }

  navigateToRoute(): void {
    this.router.navigate(['/laptop']);
  }

  data = [
    {
      'Ashok Leyland': [
        {
          east: [
            { dealername: 'Patliputra Motors' },
            { dealername: 'Action Earthmover' },
          ],
        },
        {
          north: [
            { dealername: 'Yashodha Group' },
            { dealername: 'Yashodha Transwheels' },
          ],
        },
        {
          west: [
            { dealername: 'Ahuja Automobiles' },
            { dealername: 'Navneet Motors' },
          ],
        },
      ],
      Ajax: [{ east: [{ dealername: 'Action Earthmover' }] }],
      Audi: [
        {
          east: [{ dealername: 'Adventure Auto Cars India Ltd' }],
        },
      ],
      Bajaj: [
        {
          east: [
            { dealername: 'JPS Auto Bajaj' },
            { dealername: 'Bhavya Automobiles' },
            { dealername: 'Arun Automobiles' },
            { dealername: 'Tirupati Auto Agency' },
            { dealername: 'RJ AUTOMOBILES PVT LTD' },
            { dealername: 'Volkan Bajaj' },
          ],
        },
        {
          north: [
            { dealername: 'Ansh Bajaj' },
            { dealername: 'AM Bajaj' },
            { dealername: 'DADA BAJAJ 2W' },
            { dealername: 'DADA BAJAJ 3W' },
            { dealername: 'Dada Bajaj Distributor' },
            { dealername: 'DPG 2W' },
            { dealername: 'Shiva 2W' },
            { dealername: 'Shiva 3W' },
            { dealername: 'Shiva bajaj' },
            { dealername: 'Shiva Bajaj (Dead Stock)' },
            { dealername: 'A2Z Automotive' },
            { dealername: 'Dada Bajaj' },
            { dealername: 'Rrag Automotive Pvt Ltd' },
          ],
        },
      ],
      'Bharat Benz': [
        {
          north: [
            { dealername: 'BharatBenz PAL TRUCKING' },
            { dealername: 'Espirit Trucking' },
            { dealername: 'Pal Infrastructure Solutions CCC' },
            { dealername: 'PAL SALES AND SERVICE PVT LTD' },
          ],
        },
        {
          west: [
            { dealername: 'BharatBenz and Motherson Group' },
            { dealername: 'KAMAL COMMERCIAL VEHICLES' },
          ],
        },
        {
          east: [{ dealername: 'Atlas Trucking' }],
        },
      ],
    },
    {
      'BMW Cars': [
        {
          west: [{ dealername: 'Sanghi Classic' }],
        },
      ],
    },
    {
      Cummins: [
        {
          north: [
            { dealername: 'Cummins' },
            { dealername: 'PAL SVAM Power Solutions' },
          ],
        },
      ],
    },
  ];
}
