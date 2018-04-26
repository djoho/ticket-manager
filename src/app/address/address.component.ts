import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'ticket-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    public userForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.userForm = fb.group({
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            address: fb.array([])
        });
        this.addAddressToForm();
    }

    public addAddressToForm() {
        let addressForm = this.fb.group({
            street: [null, Validators.required],
            streetNr: [null, Validators.required]
        });
        (<FormArray>this.userForm.get('address')).push(addressForm);
    }

    public removeAddressFromForm(index: number) {
        (<FormArray>this.userForm.get('address')).removeAt(index);
    }

    ngOnInit() {
    }

}
