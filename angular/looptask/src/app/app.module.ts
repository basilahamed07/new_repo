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

@NgModule({
  declarations: [
    AppComponent,
    CarBikeComponent,
    AngFormComponent,
    RtfComponent,
    UtfComponent,
    PagenotfoundComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
