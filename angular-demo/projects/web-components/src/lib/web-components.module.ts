import { NgModule } from '@angular/core';
import { WebComponentsComponent } from './web-components.component';

import { CardModule } from './card/card.module';

@NgModule({
  declarations: [
    WebComponentsComponent
  ],
  
  imports: [],
  
  // Exporter tous les composants de la bibliothèque une seule fois dans ce module principal (WebComponentsModule) afin qu'ils soient utilisables dans d'autres projets de l'application.
  //   Dans les différents modules de l'application, on peut ensuite importer ce module (WebComponentsModule) pour utiliser les composants inclus (ici, nous avons un seul composant réutilisable : CardComponent).
  exports: [
    CardModule 
  ]
})
export class WebComponentsModule { }
