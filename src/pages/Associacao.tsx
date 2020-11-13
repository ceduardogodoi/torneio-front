import 'date-fns';
import React from 'react';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  CardActions
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Input from '../components/Input';

interface IAssociacao {
  /**
   * (Opcional) O CNPJ da Associacão.
   */
  cnpj?: string;

  /**
   * (Opcional) O Nome da Associação.
   */
  nome?: string;

  /**
   * (Opcional) A Sigla da Associação.
   */
  sigla?: string;

  /**
   * (Opcional) A Cidade da Associação.
   */
  cidade?: string;

  /**
   * A Data de Cadastro da Associação.
   *
   * Por padrão a data atual.
   */
  data: Date;
}

const Associacao: React.FC = () => {
  const initialValues: IAssociacao = {
    cnpj: '',
    nome: '',
    sigla: '',
    cidade: '',
    data: new Date()
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }: FormikHelpers<IAssociacao>) => {
        // eslint-disable-next-line no-console
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
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
                    <Field name="cnpj">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-cnpj"
                          label="CNPJ"
                          mask="cnpj"
                          fullWidth
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={9}>
                    <Field name="nome">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-nome"
                          label="Nome"
                          inputProps={{ maxLength: 150 }}
                          fullWidth
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={3}>
                    <Field name="sigla">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-sigla"
                          label="Sigla"
                          inputProps={{ maxLength: 10 }}
                          fullWidth
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={9}>
                    <Field name="cidade">
                      {({ field }: FieldProps<IAssociacao>) => (
                        <Input
                          {...field}
                          id="input-cidade"
                          label="Cidade"
                          inputProps={{ maxLength: 150 }}
                          fullWidth
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Field name="data">
                        {({ field }: FieldProps<IAssociacao>) => (
                          <KeyboardDatePicker
                            {...field}
                            disableToolbar
                            id="input-data"
                            format="dd/MM/yyyy"
                            label="Data de Cadastro"
                            onChange={date => setFieldValue('data', date)}
                            invalidDateMessage="Formato inválido"
                            disabled
                          />
                        )}
                      </Field>
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container justify="flex-end">
                <Button type="submit" disabled={isSubmitting}>
                  Salvar
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default Associacao;
