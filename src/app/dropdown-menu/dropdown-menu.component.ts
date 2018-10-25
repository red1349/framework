import { Component, OnInit, Input, ViewChild, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Dropdown } from '../common/models/dropdown.model';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  @Input() btnLabel: string;
  @Input() collapsable: boolean;
  @Input() collapsed: boolean;
  @Input() url: string;
  @Input() hasSublevel: boolean;
  @Input() parentEl: ElementRef;
  @Input() possition: string;
  @Input() outerClassList: Array<string>;
  @Input() labelClassList: Array<string>;
  @Input() dropdownClassList: Array<string>;
  @Input() dropdownItems: Array<Dropdown>;

  @ViewChild('dropdownWrapper') wrapperEl: ElementRef;
  @ViewChild('labelEl') labelEl: ElementRef;
  @ViewChild('dropdownList') dropdownEl: ElementRef;

  private elPos = {h: 0, w: 0, top: 0, right: 0, bottom: 0, left: 0};

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    
    setTimeout(() => {
      // Set child dropdown height by height of parent dropdown
      // Set child dropdown width by number of items
      if (this.parentEl && !this.hasSublevel && this.dropdownItems.length > 0)   {
        this.setDropdownHeightByParentEl();
        this.setDropdownWidthByNrOfItems();
      }
      this.setElementStats();
      this.setElementPossition();
    }, 0);    
  } 

  @HostListener('mouseenter', ['$event']) onMouseEnter(event): void {
    if (this.collapsable) {
      this.collapsed = false;
    }
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event): void {
    if (this.collapsable) {
      this.collapsed = true;
    }
  }

  setElementStats(): void {
    this.elPos.h = this.el.nativeElement.clientHeight;
    this.elPos.w = this.el.nativeElement.clientWidth;
    this.elPos.top = this.el.nativeElement.offsetTop;
    this.elPos.left = this.el.nativeElement.offsetLeft;
  }

  setElementPossition(): void {
    if (!this.hasSublevel) {
      this.renderer.setStyle(this.dropdownEl.nativeElement, 'top', (
        -1 + 'px'
      ));
    }
    switch (this.possition) {
      case 'left':
        this.renderer.setStyle(this.dropdownEl.nativeElement, 'right', (
          this.elPos.left + this.getElProp(this.wrapperEl, 'clientWidth') + 'px'
        ));
        break;
      case 'right':
        this.renderer.setStyle(this.dropdownEl.nativeElement, 'left', (
          this.elPos.left + this.getElProp(this.wrapperEl, 'offsetWidth') + 'px'
        ));
        break;
      case 'top':
        this.renderer.setStyle(this.dropdownEl.nativeElement, 'top', (
          this.elPos.top - this.getElProp(this.dropdownEl, 'clientHeight') + 'px'
        ));
        break;
      case 'bottom':
        // DEFAULT
        break
      default:
        break;
    }
  }

  getElProp(el, prop): number {
    return el.nativeElement ? el.nativeElement[prop] 
      : el._elementRef.nativeElement[prop];
  }

  setDropdownWidthByNrOfItems(): void {
    const temp = Math.ceil((this.getElProp(this.wrapperEl, 'offsetHeight') 
      / this.getElProp(this.dropdownEl, 'offsetHeight')) * this.dropdownItems.length);

    this.renderer.setStyle(this.dropdownEl.nativeElement, 'min-width', 
      (this.wrapperEl.nativeElement.offsetWidth * temp + 'px'));
  }

  setDropdownHeightByParentEl(): void {
    this.renderer.setStyle(this.dropdownEl.nativeElement, 'height', 
      (this.parentEl.nativeElement.clientHeight + 'px'));
  }

}
