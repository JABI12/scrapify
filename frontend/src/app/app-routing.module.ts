import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { SellScrapComponent } from './sell-scrap/sell-scrap.component';
import { JoinCommunityComponent } from './join-community/join-community.component';
import { PickupRequestComponent } from './pickup-request/pickup-request.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'pickup-request', component: PickupRequestComponent },
    { path: 'browse', component: BrowseComponent },
    { path: 'sell', component: SellScrapComponent },
    { path: 'join', component: JoinCommunityComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Home route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
