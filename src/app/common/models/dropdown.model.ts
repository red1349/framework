import { ElementRef } from "@angular/core";

export class Dropdown {

  constructor(
    public btnLabel?: string,
    public collapsable?: boolean,
    public collapsed?: boolean,
    public url?: string,
    public hasSublevel?: boolean,
    public parentEl?: ElementRef,
    public possition?: string,
    public outerClassList?: Array<string>,
    public labelClassList?: Array<string>,
    public dropdownClassList?: Array<string>,
    public dropdownItems?: Array<Dropdown>
  ) {
    this.btnLabel = btnLabel || '';
    this.collapsable = collapsable || true;
    this.collapsed = collapsed || true;
    this.url = url || '';
    this.hasSublevel = hasSublevel || false;
    this.parentEl = parentEl || null;
    this.possition = possition || 'left';
    this.outerClassList = outerClassList || [];
    this.labelClassList = labelClassList || [];
    this.dropdownClassList = dropdownClassList || [];
    this.dropdownItems = dropdownItems || [];
   }

}