import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ScrapCollectionComponent } from './services/scrap-collection/scrap-collection.component';
import { ScrapBuyingComponent } from './services/scrap-buying/scrap-buying.component';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { SellScrapComponent } from './sell-scrap/sell-scrap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JoinCommunityComponent } from './join-community/join-community.component';
import { PickupRequestComponent } from './pickup-request/pickup-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ScrapCollectionComponent,
    ScrapBuyingComponent,
    BrowseComponent,
    HomeComponent,
    SellScrapComponent,
    JoinCommunityComponent,
    PickupRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
