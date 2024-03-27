export class Usuario {
    id: number;
    nome: string;
    email: string;
    data_criacao: string;
    senha?: string;

    constructor(
        id: number, 
        nome: string, 
        email: string, 
        data_criacao: string
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_criacao = data_criacao;
    }

}