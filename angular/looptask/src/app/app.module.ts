import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarBikeComponent } from './car-bike/car-bike.component';
import { AngFormComponent } from './componants/ang-form/ang-form.component';
import { RtfComponent } from './componants/rtf/rtf.component';
import { UtfComponent } from './componants/utf/utf.component';
import { PagenotfoundComponent } from './componants/pagenotfound/pagenotfound.component';
import { MainDashboardComponent } from './componants/main-dashboard/main-dashboard.component';
import { NavComponent } from './componants/nav/nav.component';
import { FooterComponent } from './componants/footer/footer.component';
import { TablesComponent } from './componants/tables/tables.component';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CarBikeComponent,
    AngFormComponent,
    RtfComponent,
    UtfComponent,
    PagenotfoundComponent,
    MainDashboardComponent,
    NavComponent,
    FooterComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
