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
  errors: string[];

  constructor() {
    this.pokemons = []
    this.axiosClient = axios.create({
      timeout: 3000
    });
    this.errors = []
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
      this.errors.push("Não foi possível buscar os seus pokemons")
      return (Promise.reject(console.log(error)));
    }
  }
}
