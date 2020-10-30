import React from 'react';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import { Avatar, Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import Input from '../components/Input';

interface IAssociacao {
  cnpj?: string;
  nome?: string;
}

const Associacao: React.FC = () => {
  const initialValues: IAssociacao = {
    cnpj: '',
    nome: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }: FormikHelpers<IAssociacao>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
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
                  <Grid item xs={12}>
                    <button type="submit" disabled={isSubmitting}>
                      Clique aqui bichão
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default Associacao;
