import {Via} from "../../models/Via";

export interface ICroqui {
    id: number;
    imagemUrl: string;
    autor: string;
    descricao: string;
    vias: Via[];

    getImagem(): string;
    setImagem(imagemUrl: string): void;
    getAutor(): string;
    adicionarVia(via: Via): void;
    getVias(): Via[];
}