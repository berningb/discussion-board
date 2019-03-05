import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DiscussionDetailComponent }  from './discussion-detail/discussion-detail.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: DiscussionDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create', component: CreateProfileComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}