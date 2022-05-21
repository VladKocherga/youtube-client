import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AdminComponent from './components/admin/admin.component';
import AuthorizationComponent from './components/authorization/authorization.component';
import AuthorizationGuard from './components/authorization/guards/authorization-guard.guard';
import DetailsComponent from './components/details/details.component';
import MainComponent from './components/main/main.component';
import NotFoundComponent from './components/not-found/not-found.component';
import RegistrationComponent from './components/registration/registration.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthorizationGuard] },
  {
    path: 'authorization',
    component: AuthorizationComponent,
  },
  {
    path: 'error',
    component: NotFoundComponent,
  },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'details/:id/:type',
    component: DetailsComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthorizationGuard],
  },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
