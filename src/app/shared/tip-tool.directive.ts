import { ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, EmbeddedViewRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { DummyComponent } from '../dummy/dummy.component';

@Directive({
  selector: '[appTipTool]'
})
export class TipToolDirective implements OnInit {

  @Input('appTipTool') template!: TemplateRef<unknown>;

  // host: HTMLElement;
  viewRef!: EmbeddedViewRef<unknown>;

  constructor(
    // host: ElementRef,
    private container: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
  ) {
    // this.host = host.nativeElement;
  }

  @HostListener('mouseover')
  show(): void {
    this.viewRef.rootNodes.forEach(node => {
      node.hidden = false;
    });
  }

  @HostListener('mouseout')
  hide(): void {
    this.viewRef.rootNodes.forEach(node => {
      node.hidden = true;
    });
  }


  ngOnInit(): void {
    this.viewRef = this.container.createEmbeddedView(this.template);

    // const ref = this.container.createComponent(this.cfr.resolveComponentFactory(DummyComponent));
    // ref.instance.value = 42;
    // ref.instance.valueChange.subscribe(value => {
    //   console.log('new value', value);
    // });

    this.viewRef.rootNodes.forEach(node => {
      node.hidden = true;
      node.style.backgroundColor = 'silver';
      node.style.position = 'absolute';
    });

    // HostListener ?!
    // this.host.addEventListener('mouseover', () => this.show());
    // this.host.addEventListener('mouseout', () => this.hide());

  }

}
