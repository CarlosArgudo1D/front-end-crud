import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { RemindersListComponent } from '../../reminders-list/reminders-list.component';

export const WELCOME_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'reminders', component: RemindersListComponent},
];
