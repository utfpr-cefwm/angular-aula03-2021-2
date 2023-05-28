export interface IArtigo {

  /**
   * Identificador único do artigo.
   */
  _id: number;

  /**
   * URL da imagem que ilustra o artigo.
   */
  imagem: string;

  /**
   * Título (curto) do artigo.
   */
  titulo: string;

  /**
   * Descrição/chamada do artigo (1 parágrafo curto).
   */
  descricao: string;

  /**
   * URL do artigo.
   */
  url: string;

}
