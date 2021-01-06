import api from './api';

import Associacao from '../models/Associacao';
import { unformatFromCNPJ } from '../helpers/formatters';

const route = '/associacao';

export async function fetchSaveAssociacao(
  associacao: Associacao
): Promise<Associacao> {
  const cnpj = unformatFromCNPJ(associacao.cnpj);

  const novaAssociacao = { ...associacao, cnpj };

  const { data } = await api.post<Associacao>(route, novaAssociacao);

  return data;
}
