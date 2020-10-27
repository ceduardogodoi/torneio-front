import React, { useState } from 'react';
import { Avatar, Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import Input from '../components/Input';

interface State {
  cnpj?: string;
  nome?: string;
}

const Associacao: React.FC = () => {
  const [state, setState] = useState<State>({
    cnpj: '',
    nome: ''
  });

  return (
    <form>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="associacao">A</Avatar>}
          title="Associações"
          subheader="Controle e Cadastro"
        />
        <CardContent>
          <Grid container>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Input
                  id="input-cnpj"
                  name="cnpj"
                  label="CNPJ"
                  mask="cnpj"
                  value={state.cnpj}
                  onChange={e => setState({ ...state, cnpj: e.target.value })}
                  fullWidth
                />
              </Grid>
              <Grid item xs={9}>
                <Input
                  id="input-nome"
                  name="nome"
                  label="Nome"
                  value={state.nome}
                  onChange={e => setState({ ...state, nome: e.target.value })}
                  inputProps={{ maxLength: 150 }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default Associacao;
