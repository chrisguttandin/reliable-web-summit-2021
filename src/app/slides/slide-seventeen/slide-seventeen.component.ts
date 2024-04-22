import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'rws-slide-seventeen',
    standalone: true,
    templateUrl: './slide-seventeen.component.html'
})
export class SlideSeventeenComponent {}
