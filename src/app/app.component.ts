import { Component } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from 'src/environments/environment';
import { Pokemon } from './models/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon_challenge';
  axiosClient: AxiosInstance;
  pokemons: Pokemon[];

  constructor() {
    this.pokemons = []
    this.axiosClient = axios.create({
      timeout: 3000
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.axiosClient.get(
        environment.pokemonApiHost,
      ).then(response => {
        let pokemonObj: Pokemon
        for (let pokemon in response.data) {
          pokemonObj = new Pokemon(response.data[pokemon].nome,
            response.data[pokemon].id,
            response.data[pokemon].imageUrl)
          this.pokemons.push(pokemonObj)
        }
      });
    }
    catch (error) {
      return (Promise.reject(console.log(error)));
    }
  }
}
