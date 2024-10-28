import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent
  ],
  
  imports: [
    FormsModule,
    CommonModule,
    NgxMaskModule.forRoot(),
  ],

  // Exporter ce composant dans le module principal (web-components.module.ts) afin de le rendre réutilisable dans d'autres projets de l'application qui importe le module principal.
  exports: [
    CardComponent 
  ]
})
export class CardModule { }
