import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'rws-slide-eight',
    standalone: true,
    styleUrls: ['./slide-eight.component.scss'],
    templateUrl: './slide-eight.component.html'
})
export class SlideEightComponent {}
