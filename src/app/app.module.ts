// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { DummyComponent } from './dummy/dummy.component';
import { BASE_URL } from './app.tokens';
import { BasketComponent } from './basket/basket.component';
import { CustomPreloadingStrategy } from './shared/custom-preloading.strategy';

@NgModule({
   imports: [
      RouterModule.forRoot(APP_ROUTES, {
         preloadingStrategy: CustomPreloadingStrategy
      }),
      HttpClientModule,
      BrowserModule,
      // FlightBookingModule, // would prevent lazy loading!
      SharedModule.forRoot()
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent,
      NotFoundComponent,
      DummyComponent,
      BasketComponent
   ],
   providers: [
      // {
      //    provide: BASE_URL,
      //    useValue: 'http://www.angular.at/api'
      // }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
