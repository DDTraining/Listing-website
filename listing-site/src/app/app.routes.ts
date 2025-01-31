import { Routes } from '@angular/router';
import { ListingsPageComponent } from './listings.page/listings.page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingsPageComponent } from './edit-listings-page/edit-listings-page.component';
import { MylistingsPageComponent } from './mylistings-page/mylistings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/listings', pathMatch: 'full' },
    { path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
    { path: 'listings/:id', component: ListingDetailPageComponent },
    { path: 'contact/:id', component: ContactPageComponent },
    { path: 'edit-listing/:id', component: EditListingsPageComponent },
    { path: 'my-listings', component: MylistingsPageComponent },
    { path: 'new-listings', component: NewListingsPageComponent }

]