interface Associacao {
  /**
   * O id da Associação.
   */
  id?: number;

  /**
   * O CNPJ da Associacão.
   */
  cnpj: string;

  /**
   * O Nome da Associação.
   */
  nome: string;

  /**
   * A Sigla da Associação.
   */
  sigla: string;

  /**
   * (Opcional) A Cidade da Associação.
   */
  cidade?: string;

  /**
   * A Data de Cadastro da Associação.
   *
   * Por padrão a data atual.
   */
  data_cadastro: Date;
}

export default Associacao;
