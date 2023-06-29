import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CoffesComponent } from './modules/store/coffes/coffes.component';
import { WishlistComponent } from './modules/user/wishlist/wishlist.component';
import { PolicyTermsComponent } from './pages/policy-terms/policy-terms.component';
import { CapsulesComponent } from './modules/store/capsules/capsules.component';
import { RoastedComponent } from './modules/store/roasted/roasted.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'store', component: CoffesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'policy-of-privacy', component: PolicyTermsComponent},
  {path: 'store/coffes', component: CoffesComponent},
  {path: 'store/category/capsules', component: CapsulesComponent},
  {path: 'store/category/roasted', component: RoastedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
