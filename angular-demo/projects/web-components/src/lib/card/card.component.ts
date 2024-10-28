import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardService } from "./card.service";

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() srcImg: string = ''; // Image source
  @Input() nameButton: string = ''; // Texte du bouton
  @Output() savedValue = new EventEmitter<string>(); // Pour émettre la valeur

  value: any;

  constructor(public cardService: CardService) { }

  ngOnInit(): void {
    this.value = this.cardService.message;
  }

  updateMessage() {
    this.cardService.message = this.value;
  }

  saveAndEmit(): void {
    if (this.value && this.value.length > 0) {
      this.savedValue.emit(this.value);
      alert(this.value)
      this.value = '';
    }
  }
}
