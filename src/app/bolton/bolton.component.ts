import {
    Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SlideshowComponent } from '../shared/slideshow/slideshow.component';

@Component({
    standalone: true,
    imports: [SlideshowComponent],
    selector: 'bolton-award',
    templateUrl: './bolton.component.html',
    styleUrls: ['./bolton.component.scss']
})
export class BoltonComponent implements OnInit {
    public imagePath: string;
    public images: string[] = [];

    constructor(private titleSvc: Title) { }

    public ngOnInit() {
        this.titleSvc.setTitle('North Augusta Sports Hall of Fame');
        // this.imagePath = this.assetSvc.getUrl('img/bolton/BobBolton.jpg');
        // this.images.push(this.assetSvc.getUrl('img/bolton/BobBolton.jpg'));
        // this.images.push(this.assetSvc.getUrl('img/bolton/BoltonTeam.jpg'));
        // this.images.push(this.assetSvc.getUrl('img/bolton/JasonLynn.jpg'));
    }
}
