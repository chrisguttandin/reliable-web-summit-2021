import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'rws-slide-four',
    templateUrl: './slide-four.component.html'
})
export class SlideFourComponent {}
