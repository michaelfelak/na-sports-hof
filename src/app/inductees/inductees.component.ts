import { Component, OnInit } from '@angular/core';
import { Inductee } from '../shared/inductee';

import inductees from './inductees.json';
import { InducteeCardComponent } from './inductee-card/inductee-card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [InducteeCardComponent, CommonModule],
  selector: 'inductees-page',
  templateUrl: './inductees.component.html',
  styleUrls: ['./inductees.component.scss'],
})
export class InducteesComponent implements OnInit {
  public inductees: any;

  public ngOnInit() {
    this.inductees = inductees.inductees;
    this.orderByName();
  }

  private orderByName() {
    if (this.inductees) {
      this.inductees.sort((a: Inductee, b: Inductee) => {
        if (a.lastname < b.lastname) {
          return -1;
        }
        if (a.lastname > b.lastname) {
          return 1;
        }
        return 0;
      });
    }
  }
}
