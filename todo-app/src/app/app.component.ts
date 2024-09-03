import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/component/header/header.component";
import { FooterComponent } from "./shared/component/footer/footer.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from "./shared/component/side-nav/side-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    FooterComponent, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sidenav: any;
}
