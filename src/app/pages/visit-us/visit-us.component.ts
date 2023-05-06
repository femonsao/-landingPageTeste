import { Component } from '@angular/core';
import { APPEARD } from 'src/animation/appeard.animation';

@Component({
  selector: 'app-visit-us',
  templateUrl: './visit-us.component.html',
  styleUrls: ['./visit-us.component.scss'],
  animations: [APPEARD],
})
export class VisitUsComponent {
  public state: string = 'ready';
}
