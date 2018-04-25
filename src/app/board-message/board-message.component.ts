import { Component, OnInit } from '@angular/core';
import {BoardMessageService} from '../services/board-message.service';

@Component({
  selector: 'acma-board-message',
  templateUrl: './board-message.component.html',
  styleUrls: ['./board-message.component.scss']
})
export class BoardMessageComponent implements OnInit {

  constructor(public boardMessageService: BoardMessageService) { }

  ngOnInit() {
  }

}
