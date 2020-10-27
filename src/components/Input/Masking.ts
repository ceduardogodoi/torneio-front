export type Masks = 'cep' | 'cpf' | 'cnpj';

export type MaskProps = {
  /**
   * (Optional) The type of the mask used.
   */
  mask?: Masks;
};

export function getMask(mask?: Masks): (string | RegExp)[] | undefined {
  switch (mask) {
    case 'cep':
      return [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    case 'cpf':
      return [
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/
      ];
    case 'cnpj':
      return [
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/
      ];
    default:
      return undefined;
  }
}
