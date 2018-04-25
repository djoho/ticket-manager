import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../../../interfaces/user.interface';

@Component({
  selector: 'ticket-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  public user: UserInterface = <any>{};

  constructor() { }

  ngOnInit() {
  }

}
