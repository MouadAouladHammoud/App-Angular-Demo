import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor() { }

  private _message: string = 'Message par défaut du service';
 

  // En TypeScript, les setters et getters fonctionnent comme des propriétés et non comme des méthodes. Il faut utiliser la variable "message" comme une propriété normale pour définir ou obtenir la valeur de la variable d'origine "_message" via les accesseurs get et set.
  //   Pour récupérer la valeur de message, vous pouvez soit utiliser: const value = this.message (comme ci-dessous dans Setter); soit: const value = this.cardService.message (dans card.component.ts).
  get message(): string {
    return this._message;
  }

  // En TypeScript, les setters et getters fonctionnent comme des propriétés et non comme des méthodes. Il faut utiliser la variable "message" comme une propriété normale pour définir ou obtenir la valeur de la variable d'origine "_message" via les accesseurs get et set.
  //   il faut utiliser dans card.component.ts: this.myService.message = 'Nouveau message';
  set message(newMessage: string) {
    console.log("Ancienne valeur: ", this.message)
    this._message = newMessage;
  }
  
}
