import { Component, OnInit } from '@angular/core';
import axios, { AxiosInstance } from "axios";


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  nome: string;
  axiosClient: AxiosInstance;

  constructor() {
    this.nome = ""
    this.axiosClient = axios.create({
      timeout: 3000
    });
  }

  ngOnInit(): void {
  }

  async onSave<T>(): Promise<void> {
    try {
      await this.axiosClient.post<T>(
        "http://localhost:8080/pokemon",
        { nome: this.nome }
      );
    }
    catch (error) {
      return (Promise.reject(console.log(error)));
    }
  }

  onKey(event: any): void {
    this.nome = event.target.value
  }
}
