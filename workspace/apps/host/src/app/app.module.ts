import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { FooterHostComponent } from './footer-host/footer-host.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterHostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'mf1',
          loadChildren: () =>
            loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
              exposedModule: './Module',
            }).then((m) => m.RemoteEntryModule),
        },
        {
          path: 'mf2',
          loadChildren: () =>
            import('mf2/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'mf3',
          loadChildren: () =>
            import('mf3/Module').then((m) => m.RemoteEntryModule),
        },
        {path: 'mf4',
          loadChildren: () =>
            loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:4205/remoteEntry.js',
              exposedModule: './Module',
            }).then((m) => m.RemoteEntryModule),
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
