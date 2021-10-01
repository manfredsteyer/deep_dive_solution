import { AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, ElementRef, OnInit, QueryList, ViewContainerRef } from '@angular/core';
import { DummyComponent } from 'src/app/dummy/dummy.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent)
  tabList!: QueryList<TabComponent>;

  @ContentChildren(TabComponent, { read: ViewContainerRef })
  viewContainerRefs!: QueryList<ViewContainerRef>;

  @ContentChildren(TabComponent, { read: ElementRef })
  elementRefs!: QueryList<ElementRef>;

  x: unknown[] = [{}];

  get tabs(): TabComponent[] {
    return this.tabList.toArray();
  }

  constructor(private cfr: ComponentFactoryResolver) {
  }



  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.tabs.forEach(t => t.visible = false);
      this.tabs[0].visible = true;
    }

    // this.elementRefs.forEach(e => e.nativeElement.style.color = 'blue');
    // setTimeout(() => {

    //   this.viewContainerRefs.forEach(vc => {
    //     vc.createComponent(this.cfr.resolveComponentFactory(DummyComponent));
    //   });

    // }, 2000);


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
