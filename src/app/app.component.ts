import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileandTabViewComponent } from './component/mobileand-tab-view/mobileand-tab-view.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sparecare_portfolio';
}
