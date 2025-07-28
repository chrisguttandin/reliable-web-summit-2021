import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'rws-slide-five',
    templateUrl: './slide-five.component.html'
})
export class SlideFiveComponent {}
