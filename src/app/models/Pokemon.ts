export class Pokemon {
    nome: string;
    id: number;
    imageUrl: string

    constructor(nome: string, id: number, imageUrl: string) {
        this.nome = nome
        this.id = id
        this.imageUrl = imageUrl
    }
}