import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponentHostComponent } from './footer-component-host/footer-component-host.component';
import { MatSliderModule } from '@angular/material/slider';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [AppComponent, FooterComponentHostComponent],
  imports: [
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () =>
            import('login/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'mf1',
          loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4203/remoteEntry.js',
                exposedModule: './Module'
            })
            .then(m => m.RemoteEntryModule)
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
        // {
        //   path: 'mf3',
        //   loadChildren: () =>
        //     loadRemoteModule({
        //         type: "script",
        //         remoteEntry: 'http://localhost:4205/remoteEntry.js',
        //         exposedModule: './Module',
        //         remoteName: 'mf3'
        //     })
        //     .then(m => m.RemoteEntryModule)
        // },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}