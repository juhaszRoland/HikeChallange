import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChallenegeModel } from '../models/hike.model';
import { DistanceModel } from '../models/distance.model';

@Component({
  selector: 'app-hike-items',
  templateUrl: './hike-items.component.html',
  styleUrl: './hike-items.component.css',
})
export class HikeItemsComponent {
  @Input() hike!: ChallenegeModel;
  @Input() product!: DistanceModel;
  @Input() distances: any[] = [];
  @Output() quantityChange = new EventEmitter();
}
