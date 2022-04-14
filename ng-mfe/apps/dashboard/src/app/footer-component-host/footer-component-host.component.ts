import {
  Component,
  // ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  // AfterViewInit,
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
    // private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef
  ) {}

  async ngOnInit() {
    const { FooterComponentComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'footer',
      exposedModule: './FooterComponentComponent',
    });
    const componentRef: ComponentRef<{
      year: number;
    }> = this.vcref.createComponent(FooterComponentComponent);
    componentRef.instance.year = 2022;
  }

  // ngAfterViewInit(): void {
  //   console.log('NGAVI')
  //   loadRemoteModule({
  //         remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //         remoteName: 'footer',
  //         exposedModule: './FooterComponentComponent',
  //       })
  //       .then(m => {
  //         console.log('1111111', m);
  //         return m.FooterComponentComponent;
  //       })
  //       .then(comp => this.vcref.createComponent(comp));
  // }

}
