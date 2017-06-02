import { Component, Input } from '@angular/core';

@Component({
  selector: 'remote-component',
  templateUrl: './app.remote-component.html'
})

export class RemoteComponent {
  @Input() parentVariable: String
}
