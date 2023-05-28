export class Artigo {

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

}
