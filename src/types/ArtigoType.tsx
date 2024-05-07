import { StaticImageData } from "next/image";

export default interface ArtigoType {
  _id: string;
  titulo: string;
  conteudo: string;
  imagem: string | StaticImageData;
  subconteudo?: [];
  data_criacao: string;
  data_atualizacao: string;
}
