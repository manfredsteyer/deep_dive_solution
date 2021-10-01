// src/app/shared/shared.module.ts

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule } from '@angular/forms';

// Von der CLI eingefügt
import { CityValidationDirective } from './validation/city-validation.directive';
import { TabComponent } from './controls/tab/tab.component';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';
import { TabNavigatorComponent } from './controls/tab-navigator/tab-navigator.component';
import { TipToolDirective } from './tip-tool.directive';
import { TableFieldDirective } from './controls/table-field.directive';
import { DataTableComponent } from './controls/data-table/data-table.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    TabComponent,
    TabbedPaneComponent,
    TabNavigatorComponent,

    // Von der CLI eingefügt
    CityValidationDirective,
      TabComponent,
      TabbedPaneComponent,
      TabNavigatorComponent,
      TipToolDirective,
      TableFieldDirective,
      DataTableComponent,

  ],
  providers: [
    // AuthService  // move to forRoot
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    FormsModule,
    CommonModule,

    // Neue Einträge
    CityValidationDirective,

    TabComponent,
    TabbedPaneComponent,
    TipToolDirective,
    TableFieldDirective,
    DataTableComponent,

  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    };
  }

}
