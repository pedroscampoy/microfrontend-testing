import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterRemoteComponent } from './footer-remote/footer-remote.component';

@NgModule({
  declarations: [AppComponent, FooterRemoteComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
