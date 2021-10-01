import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { TableFieldDirective } from '../table-field.directive';

/*
<app-data-table>
  <div *appTableField="let data as 'id'">{{data | myPipe}}</div>
</app-data-table>
*/

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @ContentChildren(TableFieldDirective)
  fields!: QueryList<TableFieldDirective>;

  @Input() data: any[] = [];

  get fieldList(): TableFieldDirective[] {
    return this.fields.toArray();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
