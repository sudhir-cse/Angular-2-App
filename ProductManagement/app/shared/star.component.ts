import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

    ngOnChanges(){
        this.starWidth = this.rating * 86 / 5;
    }

    onClicked(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}