import { Component } from '@angular/core';

@Component({
  selector: 'ng-mfe-mf1-entry',
  template: `<div class="expand">
    <h2>mf1's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }

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
