import { Component, Input, OnInit } from '@angular/core';
import axios, { AxiosInstance } from "axios";
import { Pokemon } from '../models/Pokemon';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  nome: string;
  axiosClient: AxiosInstance;
  @Input() pokemons: Pokemon[] | undefined;
  @Input() errors: string[] | undefined;
  constructor() {
    this.nome = ""
    this.axiosClient = axios.create({
      timeout: 3000
    });
  }

  ngOnInit(): void {
  }

  async onSave(): Promise<void> {
    try {
      let pokemon: Pokemon
      await this.axiosClient.post(
        environment.pokemonApiHost,
        { nome: this.nome }
      ).then(output => {
        pokemon = new Pokemon(output.data.nome, output.data.id, output.data.imageUrl)
        this.pokemons?.push(pokemon)
        while (this.errors && this.errors.length > 0) {
          this.errors?.pop();
        }
      });
    }
    catch (error) {
      this.errors?.push("Não foi possível registrar a captura do seu pokemon")
      return (Promise.reject(console.log(error)));
    }
  }

  onKey(event: any): void {
    this.nome = event.target.value
  }
}
