import { Routes } from '@angular/router';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { BrandpageComponent } from './component/brandpage/brandpage.component';
import { MobileandTabViewComponent } from './component/mobileand-tab-view/mobileand-tab-view.component';
import { LaptopviewComponent } from './component/laptopview/laptopview.component';
import { BusinessIntelComponent } from './component/business-intel/business-intel.component';

export const routes: Routes = [{
    path:'mobile',
    component: MobileandTabViewComponent
},{
    path: ' ', redirectTo: 'mobile',
    pathMatch: 'full',
},{
    path: 'laptop',
    component: LaptopviewComponent
},{
    path: 'business',
    component: BusinessIntelComponent
}
];
