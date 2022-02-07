import { Component, Input, OnInit } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { Pokemon } from "../models/Pokemon"

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  axiosClient: AxiosInstance;
  @Input() pokemons: Pokemon[] | undefined;

  constructor() {
    this.pokemons = []
    this.axiosClient = axios.create({
      timeout: 3000
    });
  }

  async ngOnInit(): Promise<void> {
  }

}
