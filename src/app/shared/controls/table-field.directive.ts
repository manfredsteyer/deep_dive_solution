import { Directive, Input, TemplateRef } from '@angular/core';

// <div *appTableField="let data as 'id'"></div>

@Directive({
  selector: '[appTableField]'
})
export class TableFieldDirective {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('appTableFieldAs') property = '';

  constructor(public template: TemplateRef<unknown>) { }

}
