import { Component } from '@angular/core';

@Component({
  selector: 'ng-mfe-mf2-entry',
  template: `<div class="expand">
    <h2>mf2's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .expand {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: azure;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
