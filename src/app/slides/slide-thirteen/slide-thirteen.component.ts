import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'rws-slide-thirteen',
    standalone: true,
    templateUrl: './slide-thirteen.component.html'
})
export class SlideThirteenComponent {}
