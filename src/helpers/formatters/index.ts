import FormatError from '../../errors/FormatError';

/**
 * Formata uma string de 14 caracteres para uma string no formato de CNPJ.
 *
 * @param value Uma string tendo 14 caracteres numéricos
 * @returns Uma string formatada como CNPJ `(ex: '99.999.999/9999.99')`.
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
 * Extrai somente os números de um CNPJ, como string.
 * @param value Uma string tendo o formato de CNPJ `(ex: '99.999.999/9999-99')`
 * @returns Uma string tendo somente os números do CNPJ.
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
