import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'rws-slide-twenty',
    standalone: true,
    templateUrl: './slide-twenty.component.html'
})
export class SlideTwentyComponent {}
