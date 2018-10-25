import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { Dropdown } from './common/models/dropdown.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dropdownData$: Observable<Dropdown>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.dropdownData$ = this.apiService.oneLevelDropdownData$;
    this.dropdownData$ = this.apiService.twoLevelsDropdownData$;

    this.dropdownData$.subscribe(d => {
      console.log('XXXX', d);
      
    })
  }
}
