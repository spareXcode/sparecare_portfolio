import { Routes } from '@angular/router';
import { MobileandTabViewComponent } from './component/mobileand-tab-view/mobileand-tab-view.component';
import { LaptopviewComponent } from './component/laptopview/laptopview.component';
import { BusinessIntelComponent } from './component/business-intel/business-intel.component';
import { LaptopBusinessComponent } from './component/laptop-business/laptop-business.component';
import { BrandwisedealerComponent } from './component/brandwisedealer/brandwisedealer.component';

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
    path: '', redirectTo: '/laptop',
    pathMatch: 'full',
},
{
    path: 'lb',
    component: LaptopBusinessComponent
},
{
    path: 'bwd',
    component: BrandwisedealerComponent
},
{
    path: '**',
    redirectTo: 'mobile'
},
];
