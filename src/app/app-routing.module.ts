import { LoginCreationComponent } from './login-creation/login-creation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DiscussionDetailComponent }  from './discussion-detail/discussion-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: DiscussionDetailComponent},
  { path: 'login', component: LoginCreationComponent},
  { path: 'create', component: LoginCreationComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}