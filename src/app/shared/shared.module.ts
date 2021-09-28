// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule } from '@angular/forms';

// Von der CLI eingefügt
import { CityValidationDirective } from './validation/city-validation.directive';
import { TabNavigatorComponent } from './controls/tab-navigator/tab-navigator.component';
import { TabComponent } from './controls/tab/tab.component';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';

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
    CityValidationDirective
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
  ]
})
export class SharedModule { }
