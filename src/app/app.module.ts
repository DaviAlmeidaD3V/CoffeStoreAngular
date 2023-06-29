import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component'; 
import { FooterComponent } from './shared/components/footer/footer.component'; 

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CookiesComponent } from './shared/components/cookies/cookies.component';
import { PolicyTermsComponent } from './pages/policy-terms/policy-terms.component';

import { StoreModule } from './modules/store/store.module';
import { RouterModule } from '@angular/router';
import { UserModule } from './modules/user/user.module';
import { CartModule } from './modules/cart/cart.module';
import { RegisterBarComponent } from './shared/components/register-bar/register-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    CookiesComponent,
    PolicyTermsComponent,
    RegisterBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule,
    RouterModule,
    UserModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
