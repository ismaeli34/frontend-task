import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortPipe } from './pipes/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserComponent } from './components/user/user.component';
import { UserPostDialogComponent } from './dialogs/user-post-dialog/user-post-dialog.component';
import {MatDialogModule } from '@angular/material/dialog';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';



  

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    UserDetailsComponent,
    ToolbarComponent,
    UserComponent,
    UserPostDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    MatDialogModule ,
    NgxPaginationModule,
    NgxLoadingButtonsModule

  
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
