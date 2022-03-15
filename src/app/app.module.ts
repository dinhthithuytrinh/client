import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'
import { JwPaginationModule } from 'jw-angular-pagination';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BookService } from "./_service/book.service";
import { CategoryService } from "./_service/category.service";
import { AuthorService } from "./_service/author.service";
import { ListService } from "./_service/list.service";
import { CheckoutService } from "./_service/checkout.service";
import { AuthenticationService } from "./_service/authentication.service";
import { UserService } from "./_service/user.service";

AuthenticationService
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { AllstatusComponent } from './allstatus/allstatus.component';
import { TopComponent } from './top/top.component';
import { BestbooksComponent } from './bestbooks/bestbooks.component';
import { LastestbooksComponent } from './lastestbooks/lastestbooks.component';
import { ListBookPickAuthorsComponent } from './list-book-pick-authors/list-book-pick-authors.component';
import { HotblogsComponent } from './hotblogs/hotblogs.component';
import { BooklistComponent } from './booklist/booklist.component';  
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AuthorComponent } from './author/author.component';
import { AuthordetailComponent } from './authordetail/authordetail.component';
import { SearchComponent } from './search/search.component';
import { BorrowedStatusComponent } from './borrowed-status/borrowed-status.component';
import { BorrowedListComponent } from './borrowed-list/borrowed-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginStatusComponent } from './login-status/login-status.component';
import { UserComponent } from './admin/user/user.component';

import {AuthInterceptor} from './_interceptors/auth.interceptor';

import {AuthenticationGuard} from './_guards/authentication.guard';

const routes: Routes = [

  { path: 'admin/user', component: UserComponent },

  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthenticationGuard]},

  { path: 'borrowedList', component: BorrowedListComponent},
  { path: 'search/:keyword', component: BooklistComponent},
  { path: '', component: TopComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'books', component: BooklistComponent},
  { path: 'books/category/:id', component: BooklistComponent},
  { path: 'books/author/:id', component: BooklistComponent},
  { path: 'books/:id', component: BookdetailComponent},

  { path: 'author', component: AuthorComponent},
  { path: 'author/:id', component: AuthordetailComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SlideComponent,
    FooterComponent,
    AllstatusComponent,
    TopComponent,
    BestbooksComponent,
    LastestbooksComponent,
    ListBookPickAuthorsComponent,
    HotblogsComponent,
    BooklistComponent,
    BookdetailComponent,
    AuthorComponent,
    AuthordetailComponent,
    SearchComponent,
    BorrowedStatusComponent,
    BorrowedListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CheckoutComponent,
    LoginStatusComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SlickCarouselModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 5000, positionClass: 'toast-bottom-right', preventDuplicates: true}),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BookService,
    CategoryService,
    AuthorService,
    ListService,
    CheckoutService,
    UserService,
    AuthenticationService,
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
