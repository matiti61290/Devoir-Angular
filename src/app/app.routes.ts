import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleProductComponent } from './single-product/single-product.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products/:id', component: SingleProductComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent}
];
