import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { HomeComponent } from './componenets/home/home.component';
import { TvListComponent } from './componenets/tv-list/tv-list.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { AboutComponent } from './componenets/about/about.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { ErrorpageComponent } from './componenets/errorpage/errorpage.component';
import { DetailsComponent } from './componenets/details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet,NavbarComponent,HomeComponent,DetailsComponent,TvListComponent,FooterComponent,AboutComponent,ContactComponent,ErrorpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task7';
}
