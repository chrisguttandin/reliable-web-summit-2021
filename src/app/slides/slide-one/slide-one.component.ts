import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'rws-slide-one',
    styleUrls: ['./slide-one.component.scss'],
    templateUrl: './slide-one.component.html'
})
export class SlideOneComponent {}
