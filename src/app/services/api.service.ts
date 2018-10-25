import { Injectable } from '@angular/core';
import { OneLevelDropdownData, TwoLevelsDropdownData } from '../../assets/data/dropdown.data';
import { BehaviorSubject } from 'rxjs';
import { Dropdown } from '../common/models/dropdown.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  oneLevelDropdownData$: BehaviorSubject<Dropdown> = new BehaviorSubject(null);
  twoLevelsDropdownData$: BehaviorSubject<Dropdown> = new BehaviorSubject(null);

  constructor() { 
    this.buildInitialData();
  }

  buildInitialData() {
    const temp = Object.assign(new Dropdown(), OneLevelDropdownData);
    // const temp1 = Object.assign(new Dropdown(), TwoLevelsDropdownData);
    const temp1 = new Dropdown(
      TwoLevelsDropdownData.btnLabel,
      TwoLevelsDropdownData.collapsable,
      TwoLevelsDropdownData.collapsed,
      TwoLevelsDropdownData.url,
      TwoLevelsDropdownData.hasSublevel,
      TwoLevelsDropdownData.parentEl,
      TwoLevelsDropdownData.possition,
      TwoLevelsDropdownData.outerClassList,
      TwoLevelsDropdownData.labelClassList,
      TwoLevelsDropdownData.dropdownClassList,
      this.iterateItems(TwoLevelsDropdownData.dropdownItems)
    );


    
    this.oneLevelDropdownData$.next(temp);
    this.twoLevelsDropdownData$.next(temp1);
  }

  iterateItems(from) {
    if (from) {
      console.log('FROM ', from);
      
      let temp = [];
      from.forEach(e => {
        temp.push(
          new Dropdown(
            e.btnLabel,
            e.collapsable,
            e.collapsed,
            e.url,
            e.hasSublevel,
            e.parentEl,
            e.possition,
            e.outerClassList,
            e.labelClassList,
            e.dropdownClassList,
            this.iterateItems(e.dropdownItems)
          )
        );
      });
      return temp;
    }
  }
}
