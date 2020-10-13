export type Masks = 'cep' | 'cpf';

export type MaskProps = {
  /**
   * The type of the mask used.
   */
  mask: Masks;
};

export function getMask(mask: Masks): (string | RegExp)[] {
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
    default:
      return [/./];
  }
}
