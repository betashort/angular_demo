import { Component } from '@angular/core';
import { PageUrlPair, PAGEURLS } from '../../../pages/const/urls';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink,
    MatListModule,
    MatIconModule

  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  menuList:PageUrlPair[] = PAGEURLS;

}
