import { Component, OnInit, ViewContainerRef, ComponentRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';


@Component({
  selector: 'workspace-footer-host',
  templateUrl: './footer-host.component.html',
  styleUrls: ['./footer-host.component.scss'],
})
export class FooterHostComponent implements OnInit {
  constructor(private vcref: ViewContainerRef) {}

  async ngOnInit() {
    const { FooterComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.mjs',
      exposedModule: './FooterComponent',
      type: 'module',
    });
    const componentRef: ComponentRef<{
      year: number;
    }> = this.vcref.createComponent(FooterComponent);
    componentRef.instance.year = 2024;
  }
}
