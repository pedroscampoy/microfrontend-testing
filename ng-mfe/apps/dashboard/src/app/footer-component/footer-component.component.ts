import {
  Component,
  OnInit,
  // ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'ng-mfe-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],
})
export class FooterComponentComponent implements OnInit {
  constructor(
    // private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { FooterComponentComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'footer',
      exposedModule: './FooterComponent',
    });
    const componentRef: ComponentRef<{
      year: number;
    }> = this.vcref.createComponent(FooterComponentComponent);
    componentRef.instance.year = 2022;
  }
}

// this.vcref.createComponent(this.cfr.resolveComponentFactory(FooterComponentRemote)

