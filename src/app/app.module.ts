import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SkyFluidGridModule } from '@skyux/layout';

@NgModule({
  declarations: [AppComponent, ContactComponent, ],
  imports: [BrowserModule, AppRoutingModule, SkyFluidGridModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
