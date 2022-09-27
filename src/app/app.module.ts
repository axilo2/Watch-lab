import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HistoryComponent } from './Components/history/history.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NewsletterComponent } from './Components/newsletter/newsletter.component';
import { PressComponent } from './Components/press/press.component';
import { SocialComponent } from './Components/social/social.component';
import { TStoreComponent } from './Components/t-store/t-store.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HistoryComponent,
    HomepageComponent,
    NavbarComponent,
    NewsletterComponent,
    PressComponent,
    SocialComponent,
    TStoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
