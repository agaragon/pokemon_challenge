import { Component, OnInit } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Pokemon } from "../models/Pokemon"

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
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
        "http://localhost:8080/pokemon",
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
