import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ErrorBoxComponent } from './error-box/error-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonFormComponent,
    PokemonListComponent,
    ErrorBoxComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
