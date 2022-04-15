import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FooterRemoteComponent } from './footer-remote/footer-remote.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, FooterRemoteComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
