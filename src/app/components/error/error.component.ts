import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'ticket-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
    @Input() errorFormControl: FormControl;

    constructor() {
    }

    ngOnInit() {
    }

}
