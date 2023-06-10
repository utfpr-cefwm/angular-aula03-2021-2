import { IArtigo } from "../interfaces/artigo";

export class Artigo {

  public static fromJson(iArtigo: IArtigo): Artigo {
    return new Artigo(
      iArtigo._id,
      iArtigo.imagem,
      iArtigo.titulo,
      iArtigo.descricao,
      iArtigo.url,
    );
  }

  /**
   * @param id Identificador único do artigo.
   * @param imagem URL da imagem que ilustra o artigo.
   * @param titulo Título (curto) do artigo.
   * @param descricao Descrição/chamada do artigo (1 parágrafo curto).
   * @param url URL do artigo.
   */
  constructor(
    public readonly id: number,
    public imagem: string,
    public titulo: string,
    public descricao: string,
    public url: string,
  ) {
  }

  public toJson(): IArtigo {
    return {
      _id: this.id,
      titulo: this.titulo,
      descricao: this.descricao,
      imagem: this.imagem,
      url: this.url,
    };
  }

}
