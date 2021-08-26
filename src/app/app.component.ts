import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'rws-app',
    templateUrl: './app.component.html'
})
export class AppComponent {}
