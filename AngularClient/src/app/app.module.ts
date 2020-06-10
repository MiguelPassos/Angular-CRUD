//#region Angular Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

//#endregion

//#region Application Modules

import { AppRoutingModule } from './app-routing.module';

//#endregion

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { UserReadComponent } from './components/users/user-read/user-read.component';
import { UserCreateModalComponent } from './components/users/user-create-modal/user-create-modal.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { DateStringPipe } from './custom-pipes/date-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UsersCrudComponent,
    UserReadComponent,
    UserCreateModalComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    DateStringPipe
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatCardModule,
      MatButtonModule,
      MatSnackBarModule,
      HttpClientModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatDialogModule,
      MatSelectModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
