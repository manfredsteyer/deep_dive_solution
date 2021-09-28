import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent)
  tabList!: QueryList<TabComponent>;

  get tabs(): TabComponent[] {
    return this.tabList.toArray();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.tabs.forEach(t => t.visible = false);
      this.tabs[0].visible = true;
    }
  }

  register(tab: TabComponent): void {
    this.tabs.push(tab);
  }

  activate(tabToActivate: TabComponent): void {
    for(const tab of this.tabs) {
      tab.visible = tab === tabToActivate;
    }
  }

}
