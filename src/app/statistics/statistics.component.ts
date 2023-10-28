import { Component, Input } from '@angular/core';
import { INavbarData } from '../sidenav/helper';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label:'',
    items: []
  }
  @Input() collapsed = false;
  @Input() anamating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

}
