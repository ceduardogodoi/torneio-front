/**
 * Manuseador de exceções em formatações.
 */
class FormatError extends Error {
  /**
   * Trata exceções quando não é possível formatar algum tipo de dado.
   * @param message A mensagem a ser exibida.
   */
  constructor(public message: string) {
    super(message);

    this.name = 'FormatError';

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default FormatError;
