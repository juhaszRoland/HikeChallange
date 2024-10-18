import { Component, Input } from '@angular/core';
import { ChallenegeModel } from '../models/hike.model';

@Component({
  selector: 'app-hike-items',
  templateUrl: './hike-items.component.html',
  styleUrl: './hike-items.component.css',
})
export class HikeItemsComponent {
  @Input() hike!: ChallenegeModel;
}
