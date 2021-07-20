import { Component, OnInit, Input,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item = ''; 
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
