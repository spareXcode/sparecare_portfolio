import { Routes } from '@angular/router';
import { MobileandTabViewComponent } from './component/mobileand-tab-view/mobileand-tab-view.component';
import { LaptopviewComponent } from './component/laptopview/laptopview.component';
import { BusinessIntelComponent } from './component/business-intel/business-intel.component';

export const routes: Routes = [{
    path:'mobile',
    component: MobileandTabViewComponent
},{
    path: 'laptop',
    component: LaptopviewComponent
},{
    path: 'business',
    component: BusinessIntelComponent
},
{
    path: '', redirectTo: '/mobile',
    pathMatch: 'full',
},
{
    path: '**',
    redirectTo: 'mobile'
  }
];
