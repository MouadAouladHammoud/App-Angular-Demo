import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponentsModule } from "../../projects/web-components/src/lib/web-components.module";
import { CardModule } from 'projects/web-components/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // NB: on a deux méthodes pour récupérer le composant CardComponent:
    
    // Méthode 1 : Importer le module principal qui inclut également le module du composant Card. Cette méthode sera utile si tu souhaites importer plusieurs composants de la bibliothèque en une seule fois.
    WebComponentsModule, // Ici, nous importons le module principal de la bibliothèque, qui contient le module du composant Card
    
    // Méthode 2 : importer uniquement le composant Card à partir du fichier "public-api"
    // CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
