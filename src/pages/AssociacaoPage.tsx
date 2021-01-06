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
import * as Yup from 'yup';

import Associacao from '../models/Associacao';

import { fetchSaveAssociacao } from '../services/associacao-service';

import Input from '../components/Input';

const associacaoSchema = Yup.object({
  id: Yup.number().notRequired(),
  cnpj: Yup.string().notRequired(),
  nome: Yup.string().required('Nome é obrigatório'),
  sigla: Yup.string().required('Sigla é obrigatória'),
  cidade: Yup.string().notRequired(),
  data_cadastro: Yup.date().required()
});

const AssociacaoPage: React.VFC = () => {
  const initialValues: Associacao = {
    cnpj: '',
    nome: '',
    sigla: '',
    cidade: '',
    data_cadastro: new Date()
  };

  async function handleSubmit(
    value: Associacao,
    formikHelpers: FormikHelpers<Associacao>
  ): Promise<void> {
    const { setSubmitting } = formikHelpers;

    console.log(value);

    const associacao = await fetchSaveAssociacao(value);

    console.log('associação salva:', associacao);

    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={associacaoSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, errors }) => (
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
                  <Grid item xs={1}>
                    <Field name="id">
                      {({ field }: FieldProps<Associacao>) => (
                        <Input
                          {...field}
                          id="input-id"
                          label="Código"
                          fullWidth
                          disabled
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={10}>
                    <Field name="cnpj">
                      {({ field }: FieldProps<Associacao>) => (
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
                  <Grid item xs={8}>
                    <Field name="nome">
                      {({ field }: FieldProps<Associacao>) => (
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
                      {({ field }: FieldProps<Associacao>) => (
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
                  <Grid item xs={11}>
                    <Field name="cidade">
                      {({ field }: FieldProps<Associacao>) => (
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
                  <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Field name="data_cadastro">
                        {({ field }: FieldProps<Associacao>) => (
                          <KeyboardDatePicker
                            {...field}
                            disableToolbar
                            id="input-data"
                            format="dd/MM/yyyy"
                            label="Data de Cadastro"
                            onChange={date =>
                              setFieldValue('data_cadastro', date)
                            }
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

export default AssociacaoPage;
