import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
})
export class SponsorCardComponent implements OnInit {
  public imagePath: string = '';
  @Input() public image: string = '';
  @Input() public name: string = '';
  @Input() public url: string = '';

  public ngOnInit() {}
}
