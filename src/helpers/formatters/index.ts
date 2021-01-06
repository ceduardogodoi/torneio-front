import FormatError from '../../errors/FormatError';

/**
 * Formats a 14 characters long string into a CNPJ string.
 * `(e.g: '99.999.999/9999.99')`.
 *
 * The all 14 characters must be number compatible ([0-9]{14}).
 * @param value A string having 14 number characters.
 * @returns a string formatted as a CNPJ.
 */
function formatToCNPJ(value: string): string {
  if (typeof value !== 'string') {
    throw new TypeError('Value must be a string');
  }

  if (!/\d{14}/.test(value)) {
    throw new FormatError(
      'Value must be 14 characters long and each must be number parsable'
    );
  }

  return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

/**
 * Extracts only the numbers as a string of a CNPJ string.
 * @param value A string having the CNPJ format `(e.g: 99.999.999/9999-99)`
 * @returns A string having only the CNPJ numbers.
 */
function unformatFromCNPJ(value: string): string {
  if (typeof value !== 'string') {
    throw new TypeError('Value must be a string');
  }

  if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/.test(value)) {
    throw new FormatError('Value must be like "99.999.999/9999.99"');
  }

  return value.replace(/\D/g, '');
}

export { formatToCNPJ, unformatFromCNPJ };
