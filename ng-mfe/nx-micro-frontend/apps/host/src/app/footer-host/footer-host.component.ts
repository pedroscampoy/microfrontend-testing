import {
  Component,
  OnInit,
  // ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  Injector
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'nx-micro-frontend-footer-host',
  templateUrl: './footer-host.component.html',
  styleUrls: ['./footer-host.component.scss'],
})
export class FooterHostComponent implements OnInit {
  constructor(
    // private cfr: ComponentFactoryResolver,
    private vcref: ViewContainerRef,
    private injector: Injector,
  ) {}

  async ngOnInit() {
    const { PokemonCarouselComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'footer',
      exposedModule: './FooterComponent',
    });
    const componentRef: ComponentRef<{
      year: number;
    }> = this.vcref.createComponent(PokemonCarouselComponent);
    componentRef.instance.year = 2022;
    //   this.cfr.resolveComponentFactory(PokemonCarouselComponent)
    // );
    // componentRef.instance.year = 2022;
    // const appRef = injector.get(ApplicationRef);
    // const compRef = createComponentRef(MyComponent, injector);
    // appRef.attachView(compRef.hostView);
  }
}
