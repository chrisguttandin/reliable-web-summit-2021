import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'rws-slide-twenty-two',
    templateUrl: './slide-twenty-two.component.html'
})
export class SlideTwentyTwoComponent {}
