import {
  Component,
  ViewContainerRef,
  ComponentRef,
  OnInit,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'ng-mfe-footer-component-host',
  templateUrl: './footer-component-host.component.html',
  styleUrls: ['./footer-component-host.component.scss']
})
export class FooterComponentHostComponent implements OnInit {

  constructor(
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { FooterComponentComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './FooterComponent',
      type: 'module',
      // remoteName: 'footer',
    });
    const componentRef: ComponentRef<{
      year: number;
    }> = this.vcref.createComponent(FooterComponentComponent);
    componentRef.instance.year = 2022;
  }
}
