import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DiscussionDetailComponent }  from './discussion-detail/discussion-detail.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LoginCreationComponent } from './login-creation/login-creation.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule, 
    MatBadgeModule,
    MatAutocompleteModule,
    MatListModule,
    CKEditorModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DiscussionDetailComponent,
    LoginCreationComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
